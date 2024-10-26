// 404.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const [gameOver, setGameOver] = useState(false);

  // Create falling stars
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prevStars) => [
        ...prevStars,
        { id: Date.now(), x: Math.random() * 100, y: 0 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update falling stars position
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars
          .map((star) => ({ ...star, y: star.y + 2 }))
          .filter((star) => star.y < 100),
      );
    }, 50);

    return () => clearInterval(interval);
  }, [gameOver]);

  // Check for game over
  useEffect(() => {
    if (stars.some((star) => star.y >= 90)) {
      setGameOver(true);
    }
  }, [stars]);

  const handleStarClick = (id: number) => {
    setScore(score + 1);
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="mb-4 text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8">Oops! The page you're looking for doesn't exist.</p>
      <button
        type="button"
        className="mb-8 rounded bg-blue-600 px-6 py-3 hover:bg-blue-500"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
        title="Go Back"
      >
        Go Back
      </button>

      {/* Simple Game */}
      <div className="relative h-80 w-80 overflow-hidden rounded border bg-gray-800">
        <p className="absolute left-2 top-2 text-sm">Score: {score}</p>
        <p className="absolute right-2 top-2 text-sm">
          {gameOver ? 'Game Over' : 'Catch the Stars!'}
        </p>
        {stars.map((star) => (
          <div
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              position: 'absolute',
            }}
            className="h-5 w-5 cursor-pointer rounded-full bg-yellow-400"
          ></div>
        ))}
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
            <p className="text-lg font-bold">Game Over! Your score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
