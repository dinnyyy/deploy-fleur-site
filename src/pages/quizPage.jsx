import "./Quiz.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const QuizPage = function () {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "Who is normally right?",
      options: [
        { id: 0, text: "Fleur obviously", isCorrect: false },
        { id: 1, text: "Dumb question", isCorrect: false },
        { id: 2, text: "No correct answer", isCorrect: false },
        { id: 3, text: "Josh is always right", isCorrect: true },
      ],
    },
    {
      text: "Which is Fleurs least favourite word?",
      options: [
        { id: 0, text: "Chill", isCorrect: true },
        { id: 1, text: "Settle", isCorrect: false },
        { id: 2, text: "Calm", isCorrect: false },
        { id: 3, text: "Mate", isCorrect: false },
      ],
    },
    {
      text: "What are the particular diversifications and survival strategies of deep-sea creatures living in excessive hydrothermal vent environments?",
      options: [
        { id: 0, text: "Symbiotic relationships with chemosynthetic bacteria to convert toxic chemicals into energy", isCorrect: true },
        { id: 1, text: "Photosynthesis to harness sunlight that filters down to the deep sea", isCorrect: false },
        { id: 2, text: "Utilization of stored oxygen reserves from the surface for respiration", isCorrect: false },
        { id: 3, text: "Relying on constant water temperatures similar to surface conditions for survival", isCorrect: false },
      ],
    },
    {
      text: "Who is the artist we bonded over when we first met?",
      options: [
        { id: 0, text: "Still woozy", isCorrect: false },
        { id: 1, text: "Noah Kahan", isCorrect: true },
        { id: 2, text: "Taylor Swift", isCorrect: false },
        { id: 3, text: "Ocean alley", isCorrect: false },
      ],
    },
    {
      text: "What was my favourite place in thailand?",
      options: [
        { id: 0, text: "Ao Nang", isCorrect: false },
        { id: 1, text: "Koh Tao", isCorrect: true },
        { id: 2, text: "Khao Sok", isCorrect: false },
        { id: 3, text: "Pai", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  const CheckPass = () => {
    if (score / questions.length === 1) {
      return (
        <>
          <h2>Congrats! You are Fleur</h2>
          <Link to="/timelinePage">
            <button>Continue</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <h2>You failed, are you sure you are Fleur?</h2>
          <button onClick={() => restartGame()}>Restart quiz</button>
        </>
      );
    }
  };

  return (
    <div className="quiz">
      <h1 className="test-title">Testing for Fleur</h1>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final results</h1>
          <h2>
            {score} out of {questions.length} correct ~{" "}
            {(score / questions.length) * 100}%
          </h2>
          <CheckPass />
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
