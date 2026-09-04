import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../constants/colors";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const progress =
    total > 0 ? current / total : 0;

  return (
    <View style={styles.container}>

      {/* Text */}
      <View style={styles.header}>

        <Text style={styles.questionNumber}>
          QUESTION {current}/{total}
        </Text>

        <Text style={styles.timer}>
          00:12
        </Text>

      </View>

      {/* Progress */}
      <View style={styles.track}>

        <View
          style={[
            styles.progress,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 7,
  },

  questionNumber: {
    color: COLORS.primaryLight,

    fontSize: 8,

    fontWeight: "800",
  },

  timer: {
    color: COLORS.white,

    fontSize: 8,

    fontWeight: "600",
  },

  track: {
    height: 4,

    backgroundColor: COLORS.card,

    borderRadius: 4,

    overflow: "hidden",
  },

  progress: {
    height: "100%",

    backgroundColor: COLORS.primary,

    borderRadius: 4,
  },
});