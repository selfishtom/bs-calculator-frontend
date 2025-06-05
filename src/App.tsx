import { useState } from "react";
import ScoreForm from "./components/ScoreForm";
import ResultCard from "./components/ResultCard";

function calculateGamesToTarget(
  current: number,
  target: number,
  type: "normal" | "turbo"
) {
  let games = 0;
  let score = current;

  while (score < target) {
    let gain = 0;
    if (type === "normal") {
      if (score < 5000) gain = 550 / 15;
      else if (score < 7500) gain = 375 / 15;
      else gain = 225 / 15;
    } else {
      if (score < 5000) gain = 375 / 15;
      else if (score < 7500) gain = 180 / 15;
      else gain = 90 / 15;
    }
    score += gain;
    games++;
  }

  return games;
}

function App() {
  const [result, setResult] = useState<number | null>(null);
  const [currentScore, setCurrentScore] = useState(6000);
  const [targetScore, setTargetScore] = useState(12000);
  const [matchType, setMatchType] = useState<"normal" | "turbo">("normal");

  const handleCalculate = (
    current: number,
    target: number,
    type: "normal" | "turbo"
  ) => {
    setCurrentScore(current);
    setTargetScore(target);
    setMatchType(type);
    const games = calculateGamesToTarget(current, target, type);
    setResult(games);
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8 flex flex-col items-center justify-start sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        🧠 Behavior Score Calculator
      </h1>
      <ScoreForm onCalculate={handleCalculate} />
      {result !== null && (
        <ResultCard
          gamesNeeded={result}
          current={currentScore}
          target={targetScore}
          type={matchType}
        />
      )}
    </div>
  );
}

export default App;
