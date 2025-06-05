// src/components/ResultCard.tsx

interface ResultCardProps {
  gamesNeeded: number;
  current: number;
  target: number;
  type: "normal" | "turbo";
}

export default function ResultCard({
  gamesNeeded,
  current,
  target,
  type,
}: ResultCardProps) {
  return (
    <div className="card w-full sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg bg-success text-success-content mt-6">
      <div className="card-body">
        <h2 className="card-title">🎯 Result</h2>
        <p>
          To reach from <strong>{current}</strong> to <strong>{target}</strong>{" "}
          Behavior Score by playing{" "}
          <strong>{type === "normal" ? "Normal" : "Turbo"}</strong> matches:
        </p>
        <p className="text-2xl font-bold mt-2">
          ✅ You need approximately{" "}
          <span className="underline">{gamesNeeded}</span> clean games
        </p>
      </div>
    </div>
  );
}
