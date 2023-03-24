import React from "react";

const HEAD = (
  <div
    style={{
      border: "5px solid white",
      width: 40,
      height: 40,
      borderRadius: "100%",
      position: "absolute",
      right: "-23px",
      top: "30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: 5,
      height: 100,
      backgroundColor: "white",
      position: "absolute",
      right: 0,
      top: "80px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: 80,
      height: 5,
      backgroundColor: "white",
      position: "absolute",
      right: "-80px",
      top: "100px",
      rotate: "-30deg",
      transformOrigin: "bottom left",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: 80,
      height: 5,
      backgroundColor: "white",
      position: "absolute",
      right: "-80px",
      top: "98px",
      rotate: "210deg",
      transformOrigin: "bottom left",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: 80,
      height: 5,
      backgroundColor: "white",
      position: "absolute",
      right: "-77px",
      top: "170px",
      rotate: "60deg",
      transformOrigin: "bottom left",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: 80,
      height: 5,
      backgroundColor: "white",
      position: "absolute",
      right: "-74px",
      top: "167px",
      rotate: "120deg",
      transformOrigin: "bottom left",
    }}
  />
);

const TONGUE = (
  <div
    style={{
      width: 30,
      height: 10,
      borderRadius: 10,
      backgroundColor: "red",
      position: "absolute",
      right: "-34px",
      top: "60px",
      rotate: "60deg",
      transformOrigin: "top left",
    }}
  />
);

const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
  TONGUE,
];

type hangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: hangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "5px",
          height: "30px",
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          width: "100px",
          height: "5px",
          backgroundColor: "white",
          marginLeft: "70px",
        }}
      />
      <div
        style={{
          width: "5px",
          height: "300px",
          backgroundColor: "white",
          marginLeft: "70px",
        }}
      />
      <div
        style={{ width: "150px", height: "5px", backgroundColor: "white" }}
      />
    </div>
  );
}

export default HangmanDrawing;
