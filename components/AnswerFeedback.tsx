import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";

type Props = {
  isCorrect: boolean | null;
};

export default function AnswerFeedback({
  isCorrect,
}: Props) {
  // ما كاين حتى feedback
  if (isCorrect === null) {
    return null;
  }

  const correct = isCorrect;

  return (
    <View
      style={[
        styles.container,
        correct
          ? styles.correctContainer
          : styles.incorrectContainer,
      ]}
    >

      <Ionicons
        name={
          correct
            ? "checkmark-circle"
            : "close-circle"
        }
        size={22}
        color={
          correct
            ? COLORS.success
            : COLORS.error
        }
      />

      <Text
        style={[
          styles.text,
          {
            color: correct
              ? COLORS.success
              : COLORS.error,
          },
        ]}
      >
        {correct
          ? "Bonne réponse !"
          : "Mauvaise réponse !"}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,

    borderRadius: 12,

    marginTop: 15,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    gap: 8,
  },

  correctContainer: {
    backgroundColor:
      "rgba(66, 214, 164, 0.12)",
  },

  incorrectContainer: {
    backgroundColor:
      "rgba(255, 107, 117, 0.12)",
  },

  text: {
    fontSize: 12,

    fontWeight: "700",
  },
});