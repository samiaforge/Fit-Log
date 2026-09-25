import Image from "next/image";
import banner from "@/assets/banner.png";
import React from "react";
import { Oswald } from "next/font/google";


const oswald = Oswald({
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div className="w-full py-12 ">
      <div className="bg-[#15171D] rounded-xl mx-auto flex w-full max-w-[76rem] flex-col gap-8 px-4 py-10 sm:px-6 items-center lg:flex-row  lg:gap-20 lg:px-22">
        <div className="flex-1">
          <p className="text-[#C2F800] py-5">WORKOUT LIBRARY</p>
          <h1 className={`${oswald.className} text-5xl font-bold`}>
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>
          <p className="text-[#9CA3AF] py-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br /> into today's plan, and watch the week's work add up.
          </p>
          <a href="#library" className="btn bg-[#C2F800] text-sm text-black">
          BROWSE WORKOUTS
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
        <div>
          <Image src={banner} alt="banner-pic" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
