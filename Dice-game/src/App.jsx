import React from "react";
import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={() => setIsGameStarted(true)} />
      )}
    </div>
  );
}

export default App;
