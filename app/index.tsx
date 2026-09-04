import ResultCard from "../components/ResultCard";
import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CategorySelector from "../components/CategorySelector";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import AnswerFeedback from "../components/AnswerFeedback";

import { COLORS } from "../constants/colors";
import { Category, Question } from "../types/quiz";

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
    id: "divertissement",
    name: "Divertissement",
    description: "Movies, music, and pop culture",
    icon: "film-outline",
  },
];

export default function QuizScreen() {

  const [category, setCategory] =
    useState<Category | null>(null);

  const [questions, setQuestions] =
    useState<Question[]>([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [isCorrect, setIsCorrect] =
    useState<boolean | null>(null);

  const [score, setScore] =
    useState(0);

  const [isFinished, setIsFinished] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleCategorySelect =
    async (selectedCategory: Category) => {

      try {

        setLoading(true);

        setCategory(selectedCategory);

        setCurrentIndex(0);

        setSelectedAnswer(null);

        setIsCorrect(null);

        setScore(0);
        
        setIsFinished(false);

        const data = await getQuestions(
          selectedCategory.id
        );

        setQuestions(data);

      } catch (error) {

        console.log(
          "Erreur : ",
          error
        );

      } finally {

        setLoading(false);

      }
    };

  const handleAnswer = (
    answer: string
  ) => {

    if (selectedAnswer !== null) {
      return;
    }

    const question =
      questions[currentIndex];

    const correct =
      answer === question.correctAnswer;

    setSelectedAnswer(answer);

    setIsCorrect(correct);

    if (correct) {
      setScore(
        (previous) => previous + 1
      );
    }

    setTimeout(() => {

      if (
        currentIndex + 1 <
        questions.length
      ) {

        setCurrentIndex(
          (previous) =>
            previous + 1
        );

        setSelectedAnswer(null);

        setIsCorrect(null);

      } else {
        
        setIsFinished(true);

      }

    }, 1000);
  };

  /*
   * 1️⃣ Category
   */
  if (!category) {

    return (
      <CategorySelector
        categories={categories}
        onSelect={handleCategorySelect}
      />
    );

  }

  /*
   * 2️⃣ Loading
   */
  if (loading) {

    return (
      <View style={styles.loading}>

        <Ionicons
          name="flash"
          size={30}
          color={COLORS.primaryLight}
        />

        <ActivityIndicator
          size="large"
          color={COLORS.primaryLight}
          style={{
            marginVertical: 20,
          }}
        />

        <Text style={styles.loadingText}>
          Chargement des questions...
        </Text>

      </View>
    );

  }

  /*
   * 3️⃣ Résultat
   */
  if (isFinished) {
    return (
      <ResultCard
        score={score}
        total={questions.length}
        onRestart={() => {
          setCategory(null);
          setQuestions([]);
          setCurrentIndex(0);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setScore(0);
          setIsFinished(false);
        }}
      />
    );
  }

  /*
   * 4️⃣ Quiz
   */

  const currentQuestion =
    questions[currentIndex];

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <View style={styles.headerLeft}>

          <Ionicons
            name="flash"
            size={18}
            color={COLORS.primaryLight}
          />

          <Text style={styles.logo}>
            Quiz Éclair
          </Text>

        </View>

        <Ionicons
          name="settings-outline"
          size={18}
          color={COLORS.white}
        />

      </View>

      {/* Content */}
      <View style={styles.content}>

        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          disabled={
            selectedAnswer !== null
          }
        />

        <AnswerFeedback
          isCorrect={isCorrect}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor:
      COLORS.background,
  },

  header: {
    height: 62,

    paddingHorizontal: 20,

    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "space-between",
  },

  headerLeft: {
    flexDirection: "row",

    alignItems: "center",

    gap: 12,
  },

  logo: {
    color: COLORS.white,

    fontSize: 16,

    fontWeight: "700",
  },

  content: {
    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 18,
  },

  loading: {
    flex: 1,

    backgroundColor:
      COLORS.background,

    alignItems: "center",

    justifyContent: "center",
  },

  loadingText: {
    color:
      COLORS.textSecondary,

    fontSize: 12,
  },
});