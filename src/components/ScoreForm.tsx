// ScoreForm.tsx
import React from "react";

interface Props {
  onCalculate: (
    current: number,
    target: number,
    type: "normal" | "turbo"
  ) => void;
}

export default function ScoreForm({ onCalculate }: Props) {
  const [current, setCurrent] = React.useState(6000);
  const [target, setTarget] = React.useState(12000);
  const [type, setType] = React.useState<"normal" | "turbo">("normal");

  return (
    <div className="card w-full sm:max-w-sm md:max-w-md lg:max-w-lg shadow-xl bg-base-100 p-6">
      <h2 className="text-xl font-bold mb-4">Behavior Score Calculator</h2>

      <div className="form-control mb-3">
        <label className="label">Current Score</label>
        <input
          type="number"
          className="input input-bordered"
          value={current}
          max="12000"
          min="1"
          onChange={(e) => setCurrent(+e.target.value)}
        />
      </div>

      <div className="form-control mb-3">
        <label className="label">Target Score</label>
        <input
          type="number"
          className="input input-bordered"
          value={target}
          max="12000"
          min="1"
          onChange={(e) => setTarget(+e.target.value)}
        />
      </div>

      <div className="form-control mb-3">
        <label className="label">Match Type</label>
        <select
          className="select select-bordered"
          value={type}
          onChange={(e) => setType(e.target.value as "normal" | "turbo")}
        >
          <option value="normal">Normal</option>
          <option value="turbo">Turbo</option>
        </select>
      </div>

      <button
        className="btn btn-primary w-full"
        onClick={() => onCalculate(current, target, type)}
      >
        Calculate
      </button>
    </div>
  );
}
