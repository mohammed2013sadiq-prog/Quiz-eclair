import React from "react";
import {
View,
Text,
StyleSheet,
Pressable,
ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { Category } from "../types/quiz";

type Props = {
categories: Category[];
onSelect: (category: Category) => void;
};

export default function CategorySelector({
categories,
onSelect,
}: Props) {
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

<Pressable>
<Ionicons
name="settings-outline"
size={18}
color={COLORS.white}
/>
</Pressable>
</View>

<ScrollView
showsVerticalScrollIndicator={false}
contentContainerStyle={styles.content}
>

{/* Introduction */}
<View style={styles.introduction}>
<Text style={styles.welcome}>
Choose Your Challenge
</Text>

<Text style={styles.description}>
Select a category to start your rapid-fire
quiz session. Fast thinking required.
</Text>
</View>

{/* Categories */}
<View style={styles.categories}>
{categories.map((category) => (
<Pressable
key={category.id}
style={({ pressed }) => [
styles.categoryCard,
pressed && styles.categoryPressed,
]}
onPress={() => onSelect(category)}
>

{/* Icon */}
<View style={styles.iconContainer}>
<Ionicons
name={category.icon}
size={28}
color={getIconColor(category.id)}
/>
</View>

{/* Text */}
<Text style={styles.categoryName}>
{category.name}
</Text>

<Text style={styles.categoryDescription}>
{category.description}
</Text>

</Pressable>
))}
</View>

</ScrollView>
{/* Bottom Navigation */}
<View style={styles.bottomBar}>

<Pressable style={styles.navItem}>
<View style={styles.activeIcon}>
<Ionicons
name="grid"
size={17}
color={COLORS.white}
/>
</View>
</Pressable>

<Pressable style={styles.navItem}>
<Ionicons
name="trophy-outline"
size={19}
color={COLORS.textSecondary}
/>
</Pressable>

<Pressable style={styles.navItem}>
<Ionicons
name="person-outline"
size={19}
color={COLORS.textSecondary}
/>
</Pressable>

</View>

</View>
  );
}

/* Icon colors */
function getIconColor(categoryId: string) {
  switch (categoryId) {
    case "culture":
      return "#B9B7FF";

    case "logic":
      return "#42D6A4";

    case "divertissement":
      return "#FF9A9E";

    default:
      return COLORS.primaryLight;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* HEADER */

  header: {
    height: 62,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.04)",
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

  /* CONTENT */

  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 30,
  },

  introduction: {
    alignItems: "center",
    marginBottom: 28,
  },

  welcome: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
  },

  description: {
    color: COLORS.textSecondary,
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
    maxWidth: 280,
  },

  /* CATEGORY */

  categories: {
    gap: 10,
  },

  categoryCard: {
    minHeight: 135,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.03)",
  },

  categoryPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.85,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.cardLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  categoryName: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 5,
  },

  categoryDescription: {
    color: COLORS.textSecondary,
    fontSize: 8,
    textAlign: "center",
  },

  /* BOTTOM NAVIGATION */

  bottomBar: {
    height: 58,
    backgroundColor: "#0C1428",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.05)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 25,
  },

  navItem: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  activeIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});