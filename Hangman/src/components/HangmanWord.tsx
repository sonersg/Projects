type hangmanWordProps = {
  guessedLetters: string[];
  randomWord: string;
  reveal?: boolean;
};

function HangmanWord({
  randomWord,
  guessedLetters,
  reveal = false,
}: hangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {randomWord.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em white solid" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "white",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
