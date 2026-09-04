import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function ResultCard({
  score,
  total,
  onRestart,
}: Props) {
  const percentage =
    total > 0 ? (score / total) * 100 : 0;

  const getMessage = () => {
    if (percentage >= 80) {
      return {
        title: "Bravo Yasmine !",
        subtitle: "Super score !",
      };
    }

    if (percentage >= 50) {
      return {
        title: "Bien joué !",
        subtitle: "Continue comme ça !",
      };
    }

    return {
      title: "Pas mal !",
      subtitle: "Tu peux faire mieux !",
    };
  };

  const message = getMessage();

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

      {/* Result */}
      <View style={styles.content}>
        <View style={styles.card}>

          {/* Score Circle */}
          <View style={styles.scoreCircle}>
            <Text style={styles.score}>
              {score}
            </Text>

            <Text style={styles.total}>
              / {total}
            </Text>
          </View>

          {/* Record */}
          {percentage >= 80 && (
            <View style={styles.record}>
              <Ionicons
                name="trophy"
                size={12}
                color={COLORS.success}
              />

              <Text style={styles.recordText}>
                NOUVEAU RECORD
              </Text>
            </View>
          )}

          {/* Message */}
          <Text style={styles.title}>
            {message.title}
          </Text>

          <Text style={styles.subtitle}>
            {message.subtitle}
          </Text>

          <Text style={styles.description}>
            Vous avez répondu avec une
            {"\n"}
            vitesse fulgurante.
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>

            <View style={styles.statBox}>
              <Ionicons
                name="timer-outline"
                size={16}
                color={COLORS.primaryLight}
              />

              <Text style={styles.statValue}>
                2.4s
              </Text>

              <Text style={styles.statLabel}>
                Vitesse moy.
              </Text>
            </View>

            <View style={styles.statBox}>
              <Ionicons
                name="flame-outline"
                size={16}
                color={COLORS.success}
              />

              <Text style={styles.statValue}>
                {score}
              </Text>

              <Text style={styles.statLabel}>
                Série Max
              </Text>
            </View>

          </View>

          {/* Restart */}
          <Pressable
            onPress={onRestart}
            style={({ pressed }) => [
              styles.restartButton,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name="refresh"
              size={17}
              color={COLORS.white}
            />

            <Text style={styles.restartText}>
              Recommencer
            </Text>
          </Pressable>

          <Pressable
            onPress={onRestart}
            style={({ pressed }) => [
              styles.homeButton,
              pressed && styles.homePressed,
            ]}
          >
            <Text style={styles.homeText}>
              Retour à l'accueil
            </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 62,
    paddingHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    paddingHorizontal: 18,
    justifyContent: "center",
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,

    paddingHorizontal: 18,
    paddingVertical: 25,

    alignItems: "center",
  },

  scoreCircle: {
    width: 120,
    height: 120,

    borderRadius: 60,

    borderWidth: 5,
    borderColor: COLORS.success,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 18,
  },

  score: {
    color: COLORS.success,
    fontSize: 30,
    fontWeight: "800",
  },

  total: {
    color: COLORS.textSecondary,
    fontSize: 10,
    marginTop: -4,
  },

  record: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,

    marginBottom: 12,
  },

  recordText: {
    color: COLORS.success,
    fontSize: 7,
    fontWeight: "800",
  },

  title: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
  },

  subtitle: {
    color: COLORS.primaryLight,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 3,
  },

  description: {
    color: COLORS.textSecondary,
    fontSize: 10,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 14,
    marginBottom: 18,
  },

  statsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginBottom: 18,
  },

  statBox: {
    flex: 1,

    backgroundColor: COLORS.background,

    paddingVertical: 10,

    alignItems: "center",

    borderRadius: 4,
  },

  statValue: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 4,
  },

  statLabel: {
    color: COLORS.textSecondary,
    fontSize: 7,
    marginTop: 2,
  },

  restartButton: {
    width: "100%",
    height: 43,

    borderRadius: 22,

    backgroundColor: COLORS.primary,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 7,
  },

  restartText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },

  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  homeButton: {
    marginTop: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  homePressed: {
    opacity: 0.6,
  },

  homeText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: "600",
  },
});