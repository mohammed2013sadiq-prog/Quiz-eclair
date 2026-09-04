import { Ionicons } from "@expo/vector-icons";

export type IoniconName = keyof typeof Ionicons.glyphMap;

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: IoniconName;
};

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};