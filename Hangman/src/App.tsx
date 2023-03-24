import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function App() {
  const [randomWord, setrandomWord] = useState(getWord);
  const [guessedLetters, setguessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    letter => !randomWord.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 7; // # of guesses
  const isWinner = randomWord
    .split("")
    .every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setguessedLetters(currentLetters => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "Enter") {
        e.preventDefault();
        setguessedLetters([]);
        setrandomWord(getWord());
      }

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        gap: "2rem",
        backgroundColor: "#242424",
        borderRadius: "3rem",
        padding: "2em",
      }}
    >
      <div style={{ color: "white" }}>
        {isWinner && "Yup yup! - Refresh to try again!"}
        {isLoser && "Loooser! - Refresh to try again!"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        randomWord={randomWord}
        guessedLetters={guessedLetters}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            randomWord.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <small>&copy; Soner-24.3.2023</small>
    </div>
  );
}

export default App;
