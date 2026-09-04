import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { COLORS } from "../constants/colors";
import { Question } from "../types/quiz";

type Props = {
  question: Question;
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
  disabled?: boolean;
};

export default function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
  disabled = false,
}: Props) {
  return (
    <View style={styles.container}>

      {/* Question Card */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>
          {question.question}
        </Text>
      </View>

      {/* Answers */}
      <View style={styles.answersContainer}>
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;

          return (
            <Pressable
              key={option}
              disabled={disabled}
              onPress={() => onAnswer(option)}
              style={({ pressed }) => [
                styles.answerButton,

                isSelected && styles.selectedAnswer,

                pressed &&
                  !disabled &&
                  styles.pressed,
              ]}
            >
              <Text
                style={[
                  styles.answerText,
                  isSelected && styles.selectedText,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  questionCard: {
    minHeight: 128,
    backgroundColor: COLORS.card,
    borderRadius: 16,

    paddingHorizontal: 25,
    paddingVertical: 20,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 17,
  },

  questionText: {
    color: COLORS.white,

    fontSize: 17,
    fontWeight: "700",

    textAlign: "center",

    lineHeight: 23,
  },

  answersContainer: {
    gap: 9,
  },

  answerButton: {
    height: 40,

    backgroundColor: COLORS.card,

    borderRadius: 22,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "transparent",
  },

  selectedAnswer: {
    backgroundColor: COLORS.primary,

    borderColor: COLORS.primaryLight,
  },

  answerText: {
    color: COLORS.white,

    fontSize: 11,
    fontWeight: "600",
  },

  selectedText: {
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.7,

    transform: [
      {
        scale: 0.98,
      },
    ],
  },
});