// components/ui/progress.tsx
import React from "react";

interface ProgressProps {
  value: number;
  max: number;
}

export default function Progress({ value, max }: ProgressProps) {
  const progress = (value / max) * 100;

  return (
    <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-purple-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
