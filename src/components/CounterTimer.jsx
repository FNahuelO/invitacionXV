import React, { useState, useEffect } from "react";
import Corazon from "../assets/Corazon";
import vector from "../assets/flores.svg";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = new Date("2025-08-01") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleComponents = (key, idx) => {
    const value = String(timeLeft[key]);

    return (
      <div
        className="flex flex-col px-1 items-center"
        style={{
          borderRight: idx < 3 ? "1px solid rgba(0, 0, 0, 0.3)" : null,
        }}
      >
        <span className="text-[#FBCD97] text-base font-baloo">
          {value.length === 1 ? `0${value}` : value}
        </span>
        <span className="font-bold text-sm text-[#556C69] font-alegreya">
          {key.toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <div className={`w-64 h-64 items-center justify-center flex relative`}>
      <img src={vector} className="absolute min-w-44 min-h-44" />
      <div
        className="w-44 h-44 flex flex-col items-center justify-center rounded-full"
        style={{
          padding: "0.4rem",
          background: "linear-gradient(144.45deg, #FFE79E 6.49%, #967309 101.6%)",
        }}
      >
        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
          <span className="text-[#939393] text-3xl font-carattere">Falta</span>
          <div className="pt-2 pb-4 flex text-base text-[#FBCD97] ">
            {Object.keys(timeLeft).map((key, idx) => handleComponents(key, idx))}
          </div>
          <Corazon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
