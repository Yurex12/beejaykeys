import { useEffect, useState } from "react";

const tailwindColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-gray-500",
];

export default function useGenerateRandomColors() {
  const [colorClass, setColorClass] = useState("");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  };

  useEffect(() => {
    setColorClass(getRandomColor());
  }, []);

  return { colorClass };
}
