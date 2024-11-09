const express = require('express');
const bodyParser = require('body-parser');
const YatzyGame = require('./YatzyGame');
const path = require('path');

const app = express();
const game = new YatzyGame();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/roll', (req, res) => {
  if (game.dice.getRollsLeft() === 0) {
    return res.status(400).json({ message: 'No rolls left. Please score a category.' });
  }
  const diceValues = game.rollDice();
  const possibleScores = game.engine.calculatePossibleScores(game.dice.getDiceValues());
  res.json({
    diceValues,
    rollsLeft: game.dice.getRollsLeft(),
    possibleScores,
  });
});

app.put('/hold/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < 5) {
    game.holdDice(index);
    res.json({
      heldDice: game.dice.heldDice,
    });
  } else {
    res.status(400).json({ message: 'Invalid dice index' });
  }
});

app.post('/score/:category', (req, res) => {
  const category = req.params.category;
  if (!game.engine.isValidSelection(category)) {
    return res.status(400).json({ message: 'Category already scored or invalid' });
  }
  const score = game.scoreCategory(category);
  if (score !== null) {
    res.json({
      scores: game.engine.getScores(),
      totalScore: game.engine.getTotalScore(),
    });
  } else {
    res.status(400).json({ message: 'Invalid category or category already scored' });
  }
});

app.get('/state', (req, res) => {
  const possibleScores = game.engine.calculatePossibleScores(game.dice.getDiceValues());
  res.json({
    ...game.getGameState(),
    possibleScores,
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
