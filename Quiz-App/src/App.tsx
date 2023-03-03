import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { QuestionState, fetchQuizQuestions } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
// types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setloading] = useState(false);
  const [questions, setquestions] = useState<QuestionState[]>([]);
  const [number, setnumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
  const [score, setscore] = useState(0);
  const [gameOver, setgameOver] = useState(true);
  const [difficulty, setdifficulty] = useState("medium");

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));

  const startTrivia = async () => {
    setloading(true);
    setgameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty);

    setquestions(newQuestions);
    setscore(0);
    setuserAnswers([]);
    setnumber(0);
    setloading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setscore(prev => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setuserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setgameOver(true);
    } else {
      setnumber(nextQuestion);
    }
  };

  const handleDifficulty = (e: React.MouseEvent<HTMLButtonElement>) => {
    setdifficulty((e.target as HTMLButtonElement).innerText.toLowerCase());
  };

  return (
    <div className="App">
    
      <h1>QUIZ APP</h1>

      {gameOver ? <h1>Soner Güçlü</h1> : null}

      {gameOver ? <p>Don't pat the question to cheat!</p> : null}

      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          gameOver={gameOver}
          score={score}
          correctAnswer={questions[number].correct_answer}
          category={questions[number].category}
          difficulty={questions[number].difficulty}
        />
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <div className="difficulty-buttons">
          <button className="difficulty-button" onClick={handleDifficulty}>
            Easy
          </button>
          <button className="difficulty-button" onClick={handleDifficulty}>
            Medium
          </button>
          <button className="difficulty-button" onClick={handleDifficulty}>
            Hard
          </button>
        </div>
      ) : null}

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start-btn" onClick={startTrivia}>
          Start
        </button>
      ) : null}
    </div>
  );
}

export default App;
