import React, { useEffect, useState } from "react";

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const updateLocalTime = () => {
      const current = new Date().toLocaleTimeString("en-US", {
        timeStyle: "medium",
      });

      setCurrentTime(current);
    };

    const intervalId = setInterval(updateLocalTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontSize: "18px", fontWeight: "bold" }}>{currentTime}</div>
  );
};

export default TimeComponent;
