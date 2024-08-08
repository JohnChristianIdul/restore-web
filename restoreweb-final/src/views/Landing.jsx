"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../../@/components/magicui/particles";
import TopBar from "./TopBar";

const Landing = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setColor(theme === "light" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <TopBar/>
      <div className="relative flex h-[89vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <span className="tracking-wider p-1 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-50 to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-tight text-transparent dark:from-white dark:to-gray-400">
          Await. Adapt. <br/>Achieve.
        </span>
        <span className="leading-10 thin tracking-wider p-1 text-center text">"Empowering efficiency through Precision <br/> Forecasting and Strategic Insights."</span>
        <div className="flex gap-3 my-1">
          <button className="inline-block my-3 px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 h-10">
            Start now
          </button>
          <button className="inline-block px-4 py-2  text-gray-200 rounded hover:bg-gray-400">
            Learn more
          </button>
        </div>
        <Particles
          className="absolute inset-0"
          quantity={140}
          ease={80}
          color={"#ffffff"}
          refresh
          size={0.5}
        />    
    </div>
    </>
    
  );
};
export default Landing;
