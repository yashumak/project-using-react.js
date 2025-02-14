import React, { useState } from "react";
import RoleDice from "./RoleDice";
import { Button } from "../Styled/Button";

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [computerGuess, setComputerGuess] = useState(null);
  const [result, setResult] = useState("");

  const rollDice = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    const computerChoice = Math.floor(Math.random() * 6) + 1;

    setCurrentDice(randomDice);
    setComputerGuess(computerChoice);

    if (randomDice === computerChoice) {
      setResult("You Won!");
    } else {
      setResult("You Lost!");
    }
  };

  return (
    <main className="pt-16 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-[100px] leading-[100px]">{computerGuess ?? "?"}</h1>
        <p className="text-[20px] font-medium">Computer Guess</p>
      </div>

      <RoleDice currentDice={currentDice} rollDice={rollDice} />

      <div className="mt-10">
        <Button onClick={rollDice}>Roll Dice</Button>
      </div>

      {result && (
        <div className="mt-5 text-3xl  text-blue-500 font-bold text-center">{result}</div>
      )}
    </main>
  );
};

export default GamePlay;
