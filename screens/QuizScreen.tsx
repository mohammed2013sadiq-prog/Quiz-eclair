import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategorySelector from "../components/CategorySelector";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import AnswerFeedback from "../components/AnswerFeedback";
import ResultCard from "../components/ResultCard";

import { Category, Question } from "../types/quiz";
import { COLORS } from "../constants/colors";
import { getQuestions } from "../services/api";

const categories: Category[] = [
  {
    id: "culture",
    name: "Culture Générale",
    description: "Test your global knowledge",
    icon: "globe-outline",
  },
  {
    id: "logic",
    name: "Logique",
    description: "Puzzles and reasoning",
    icon: "bulb-outline",
  },
  {
    id: "entertainment",
    name: "Divertissement",
    description: "Movies, music, and pop culture",
    icon: "film-outline",
  },
];

export default function QuizScreen() {
  const [state, setState] = useState<
    "category" | "quiz" | "result"
  >("category");

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [isCorrect, setIsCorrect] = useState(false);

  const [showFeedback, setShowFeedback] =
    useState(false);

  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(
    null
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleCategorySelect = async (
    category: Category
  ) => {
    setSelectedCategory(category);
    setLoading(true);
    setError(null);

    try {
      const data = await getQuestions(category.id);

      if (!data.length) {
        throw new Error(
          "Aucune question disponible pour cette catégorie."
        );
      }

      setQuestions(data);
      setCurrentIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setState("quiz");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur de connexion au serveur."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) {
      return;
    }

    const currentQuestion =
      questions[currentIndex];

    const correct =
      String(currentQuestion.correctAnswer)
        .trim()
        .toLowerCase() ===
      String(answer).trim().toLowerCase();

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    timerRef.current = setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);

      if (currentIndex + 1 >= questions.length) {
        setState("result");
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 1000);
  };

  const handleRestart = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setError(null);
    setSelectedCategory(null);
    setState("category");
  };

  const currentQuestion =
    questions[currentIndex];

  return (
    <View style={styles.screen}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons
          name="flash"
          size={18}
          color={COLORS.primaryLight}
        />

        <Text style={styles.logo}>
          Quiz Éclair
        </Text>

        <Ionicons
          name="settings-outline"
          size={16}
          color={COLORS.white}
        />
      </View>

      {/* CATEGORY */}
      {state === "category" && (
        <>
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator
                size="large"
                color={COLORS.primaryLight}
              />

              <Text style={styles.loadingText}>
                Chargement...
              </Text>
            </View>
          ) : (
            <>
              <CategorySelector
                categories={categories}
                onSelect={handleCategorySelect}
              />

              {error && (
                <Text style={styles.error}>
                  {error}
                </Text>
              )}
            </>
          )}
        </>
      )}

      {/* QUIZ */}
      {state === "quiz" &&
        currentQuestion && (
          <View style={styles.quizContainer}>
            <ProgressBar
              current={currentIndex + 1}
              total={questions.length}
            />

            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              disabled={selectedAnswer !== null}
            />

            {showFeedback && (
              <AnswerFeedback
                isCorrect={isCorrect}
              />
            )}
          </View>
        )}

      {/* RESULT */}
      {state === "result" && (
        <ResultCard
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}

      {/* BOTTOM NAV */}
      {state !== "result" && (
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.activeNav}
            onPress={handleRestart}
          >
            <Ionicons
              name="grid"
              size={16}
              color={COLORS.white}
            />
          </TouchableOpacity>

          <Ionicons
            name="trophy-outline"
            size={17}
            color={COLORS.textSecondary}
          />

          <Ionicons
            name="person-outline"
            size={17}
            color={COLORS.textSecondary}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 60,
    backgroundColor: "#070D1C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#121B30",
  },

  logo: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "800",
  },

  quizContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: COLORS.textSecondary,
    marginTop: 12,
    fontSize: 12,
  },

  error: {
    color: COLORS.error,
    textAlign: "center",
    fontSize: 11,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  bottomNav: {
    height: 48,
    backgroundColor: "#080E1D",
    borderTopWidth: 1,
    borderTopColor: "#151E35",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  activeNav: {
    width: 26,
    height: 26,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});