"use client";
import Link from "next/link";
import React, { useState } from "react";

const MyPlanDetails = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="pb-5">
        <h1 className="text-2xl font-bold pb-2">MY PLAN</h1>
        <p className="text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 border border-[#212631] rounded-2xl p-4 bg-[#13161D]">
        <div>
          <p className="text-[#8A92A0]">Exercises</p>
          <p>2</p>
        </div>

        <div>
          <p className="text-[#8A92A0]">Minutes</p>
          <p>23</p>
        </div>

        <div>
          <p className="text-[#8A92A0]">Calories</p>
          <p>190</p>
        </div>
      </div>

      <div className="py-5">
        <div className="flex w-fit gap-1 border border-[#212631] rounded-2xl p-1 text-[#8A92A0]">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-xl px-4 py-2 ${
              activeTab === "today" ? "bg-[#1C2028] text-white" : ""
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-4 py-2 ${
              activeTab === "saved" ? "bg-[#1C2028] text-white" : ""
            }`}
          >
            Saved
          </button>
        </div>
      </div>
      <div className="border border-[#212631] rounded-2xl bg-[#111317] py-20 px-12 text-center">
        <h2 className="pb-1">NOTHING HERE YET</h2>
        <p className="pb-7">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="border rounded-2xl py-2 px-4 text-black font-semibold bg-[#C2F10D]"
        >
          Go to workouts
        </Link>
      </div>
    </div>
  );
};

export default MyPlanDetails;
