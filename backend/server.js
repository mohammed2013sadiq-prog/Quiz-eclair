const express = require('express');
const cors = require('cors');
const questions = require('./data/questions');

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const highScores = {
  culture_generale: 0,
  logique: 0,
  divertissement: 0
};

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.get('/questions', (req, res) => {
  const categoryKey = req.query.category;
  
  if (!categoryKey || !questions[categoryKey]) {
    return res.status(400).json({
      error: "Catégorie invalide ou manquante",
      validCategories: Object.keys(questions)
    });
  }

  const categoryQuestions = questions[categoryKey];
  

  return res.json({
    category: categoryKey,
    total: categoryQuestions.length,
    highScore: highScores[categoryKey] || 0,
    questions: categoryQuestions
  });
});


app.post('/score', (req, res) => {
  const { category, score, totalQuestions, averageTimePerQuestion, maxStreak } = req.body;

  if (!category || score === undefined) {
    return res.status(400).json({ error: "Champs requis manquants (category, score)" });
  }

  const currentHigh = highScores[category] || 0;
  const isNewRecord = score > currentHigh;
  
  if (isNewRecord) {
    highScores[category] = score;
  }

  console.log(`🏆 Score enregistré - Catégorie: ${category}, Score: ${score}/${totalQuestions || 15}, Record: ${isNewRecord ? 'Nouveau!' : currentHigh}`);

  return res.json({
    success: true,
    score,
    totalQuestions: totalQuestions || 15,
    isNewRecord,
    previousRecord: currentHigh,
    newRecord: highScores[category],
    stats: {
      averageTime: averageTimePerQuestion || 2.4,
      maxStreak: maxStreak || 0
    }
  });
});


app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    appName: 'Quiz Éclair API',
    timestamp: new Date().toISOString()
  });
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`⚡ Quiz Éclair Backend démarré sur http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Port ${port} est occupé, tentative sur le port ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    console.error('Erreur de démarrage du serveur :', err);
    process.exit(1);
  });
};

startServer(PORT);
