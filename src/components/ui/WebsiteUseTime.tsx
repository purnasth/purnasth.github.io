import React, { useEffect, useState } from 'react';

const WebsiteUseTime: React.FC = () => {
  const [secondsSpent, setSecondsSpent] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Retrieve stored time from localStorage
    const storedTime = localStorage.getItem('timeSpent');
    if (storedTime) {
      setSecondsSpent(parseInt(storedTime, 10));
    }

    // Function to handle visibility change
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };

    // Set up visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set up an interval to increment time spent if the tab is active
    const intervalId = setInterval(() => {
      if (isActive) {
        setSecondsSpent((prev) => {
          const updatedTime = prev + 1;
          localStorage.setItem('timeSpent', updatedTime.toString());
          return updatedTime;
        });
      }
    }, 1000);

    // Clear interval and remove event listener on unmount
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isActive]);

  // Format time as HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="space-y-3">
      <span className="text-sm uppercase text-light/50">Website Use Time</span>
      <p className="font-medium">{formatTime(secondsSpent)}</p>
    </div>
  );
};

export default WebsiteUseTime;