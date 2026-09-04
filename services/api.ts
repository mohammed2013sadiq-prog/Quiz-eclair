import axios from "axios";
import { Question } from "../types/quiz";
import { Platform } from "react-native";

const USE_MOCK = true;

// For Expo, we need to use the host machine's IP or special addresses
// Android emulator: 10.0.2.2
// iOS simulator: localhost or your machine IP
// Physical devices: your machine IP (e.g., 192.168.x.x)
const getBaseURL = () => {
  if (Platform.OS === "android") {
    return "http://10.0.2.2:5001";
  }
  // For iOS simulator and physical devices, try localhost first
  return "http://localhost:5001";
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 5000,
});

// Map mobile category IDs to backend category keys
const categoryMap: Record<string, string> = {
  culture: "culture_generale",
  logic: "logique",
  entertainment: "divertissement",
};

const questions: Record<string, Question[]> = {
  culture: [
    {
      id: 1,
      question: "Quelle est la capitale du Maroc ?",
      options: ["Casablanca", "Rabat", "Marrakech", "Tanger"],
      correctAnswer: "Rabat",
    },
    {
      id: 2,
      question: "Quel est le plus grand océan du monde ?",
      options: ["Atlantique", "Indien", "Pacifique", "Arctique"],
      correctAnswer: "Pacifique",
    },
    {
      id: 3,
      question: "Combien de continents existe-t-il ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
    },
    {
      id: 4,
      question: "Quelle planète est surnommée la planète rouge ?",
      options: ["Mars", "Vénus", "Jupiter", "Mercure"],
      correctAnswer: "Mars",
    },
    {
      id: 5,
      question: "Quelle est la langue officielle du Brésil ?",
      options: ["Espagnol", "Portugais", "Anglais", "Français"],
      correctAnswer: "Portugais",
    },
  ],

  logic: [
    {
      id: 6,
      question: "Quel nombre vient ensuite : 2, 4, 6, 8, ?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "10",
    },
    {
      id: 7,
      question: "Si 5 + 5 = 10, combien font 10 + 10 ?",
      options: ["15", "18", "20", "25"],
      correctAnswer: "20",
    },
    {
      id: 8,
      question: "Quel nombre est différent des autres ?",
      options: ["2", "4", "6", "9"],
      correctAnswer: "9",
    },
    {
      id: 9,
      question: "Quel est le résultat de 3 × 4 ?",
      options: ["7", "10", "12", "14"],
      correctAnswer: "12",
    },
    {
      id: 10,
      question: "Si aujourd'hui est lundi, quel jour sera demain ?",
      options: ["Dimanche", "Mardi", "Mercredi", "Jeudi"],
      correctAnswer: "Mardi",
    },
  ],

  divertissement: [
    {
      id: 11,
      question: "Quel instrument possède généralement 6 cordes ?",
      options: ["Piano", "Guitare", "Flûte", "Batterie"],
      correctAnswer: "Guitare",
    },
    {
      id: 12,
      question: "Combien de joueurs composent une équipe de football sur le terrain ?",
      options: ["9", "10", "11", "12"],
      correctAnswer: "11",
    },
    {
      id: 13,
      question: "Quel art utilise principalement une caméra ?",
      options: ["Cinéma", "Peinture", "Sculpture", "Danse"],
      correctAnswer: "Cinéma",
    },
    {
      id: 14,
      question: "Quel sport utilise une raquette ?",
      options: ["Tennis", "Football", "Natation", "Boxe"],
      correctAnswer: "Tennis",
    },
    {
      id: 15,
      question: "Quel objet est utilisé pour écouter de la musique ?",
      options: ["Casque", "Clavier", "Souris", "Écran"],
      correctAnswer: "Casque",
    },
  ],
};

export const getQuestions = async (
  category: string
): Promise<Question[]> => {
  try {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return questions[category] || [];
    }

    const backendCategory = categoryMap[category];
    
    if (!backendCategory) {
      // Silently fall back to mock data
      return questions[category] || [];
    }

    try {
      const response = await api.get(`/questions?category=${backendCategory}`);
      
      if (!response.data || !response.data.questions || !Array.isArray(response.data.questions)) {
        return questions[category] || [];
      }

      // Transform backend format to mobile format
      const transformed = response.data.questions
        .filter((q: any) => q && q.question && q.options && q.correctAnswerIndex !== undefined)
        .map((q: any, index: number) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
          correctAnswer: q.options[q.correctAnswerIndex],
        }));

      if (transformed.length === 0) {
        return questions[category] || [];
      }

      return transformed;
    } catch (apiError) {
      // Silently fall back to mock data on any API error
      return questions[category] || [];
    }
  } catch (error) {
    return [];
  }
};