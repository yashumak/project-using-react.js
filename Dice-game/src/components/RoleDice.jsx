import React from "react";

const RoleDice = ({ currentDice, rollDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="cursor-pointer" onClick={rollDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`Dice showing ${currentDice}`}
          className="w-24 h-24"
        />
      </div>
      <p className="text-2xl mt-4">Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
