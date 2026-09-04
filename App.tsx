import React from "react";
import { StatusBar } from "expo-status-bar";

import QuizScreen from "./screens/QuizScreen";

export default function App() {
return (
<>
<StatusBar style="light" />
<QuizScreen />
</>
);
}