import React, { useState } from "react"; 
import { Button, OutlineButton } from "../Styled/Button"; 

const StartGame = ({ toggle }) => {
  return (
    <div className="max-w-5xl h-screen flex items-center justify-center mx-auto space-x-8">
      <div className="flex justify-center items-center">
        <img src="/images/dices.png" alt="Dice Game" className="max-w-xs md:max-w-sm" />
      </div>

      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  );
};

export default StartGame;
