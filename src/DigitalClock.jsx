import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${doubleDigits(hours)}:${doubleDigits(minutes)}:${doubleDigits(seconds)}`;
  }
  function doubleDigits(time) {
    return (time < 10 ? "0" : "") + time;
  }

  return (
    <div className="container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
