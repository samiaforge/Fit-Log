"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { PlanContext } from "@/context/PlanContext";

const MyPlanDetails = () => {
  const context = useContext(PlanContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  if (!context) {
    return null;
  }

  const { plan, saved, removeFromPlan, removeFromSaved } = context;

  const displayedWorkouts = activeTab === "today" ? plan : saved;

  const sortedWorkouts = [...displayedWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const totalMinutes = displayedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = displayedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

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
          <p>{displayedWorkouts.length}</p>
        </div>

        <div>
          <p className="text-[#8A92A0]">Minutes</p>
          <p>{totalMinutes}</p>
        </div>

        <div>
          <p className="text-[#8A92A0]">Calories</p>
          <p>{totalCalories}</p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="py-5 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <div className="flex w-fit gap-1 border border-[#212631] rounded-2xl p-1 text-[#8A92A0]">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-xl px-4 py-2 ${
              activeTab === "today"
                ? "bg-[#1C2028] text-white"
                : ""
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-xl px-4 py-2 ${
              activeTab === "saved"
                ? "bg-[#1C2028] text-white"
                : ""
            }`}
          >
            Saved
          </button>
        </div>

        <div className="relative">
          <p className="text-sm text-[#8A92A0] mb-2">
            Sort By
          </p>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "duration"
                  | "calories"
                  | "rating"
              )
            }
            className="border border-[#212631] rounded-xl bg-[#13161D] px-4 py-2 text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Workout List */}
      {displayedWorkouts.length === 0 ? (
        <div className="border border-[#212631] rounded-2xl bg-[#111317] py-20 px-12 text-center">
          <h2 className="pb-1 font-bold text-xl">
            NOTHING HERE YET
          </h2>

          <p className="pb-7 text-[#A1A1AA]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="border rounded-2xl py-2 px-4 text-black font-semibold bg-[#C2F10D]"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col md:flex-row gap-5 border border-[#212631] rounded-2xl bg-[#13161D] p-4"
            >
              {/* Image */}
              <div className="w-full md:w-52 h-40 shrink-0">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Workout Info */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="font-bold text-xl">
                  {workout.name}
                </h2>

                <p className="text-[#8A92A0] mt-1">
                  {workout.equipment}
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-[#A1A1AA]">
                  <span>
                    <i className="fa-regular fa-clock"></i>{" "}
                    {workout.duration} min
                  </span>

                  <span>
                    <i className="fa-solid fa-fire"></i>{" "}
                    {workout.caloriesBurned} kcal
                  </span>

                  <span>
                    <i className="fa-regular fa-star"></i>{" "}
                    {workout.rating}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-3">
                <Link
                  href={`/workouts/${workout.id}`}
                  className="btn rounded-xl"
                >
                  View Details
                </Link>

                {activeTab === "today" && (
                  <button
                    onClick={() => removeFromPlan(workout.id)}
                    className="btn bg-[#C2F800] text-black rounded-xl"
                  >
                    Mark as Read
                  </button>
                )}

                {activeTab === "today" && (
                  <button
                    onClick={() => removeFromPlan(workout.id)}
                    className="btn btn-square rounded-xl"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}

                {activeTab === "saved" && (
                  <button
                    onClick={() => removeFromSaved(workout.id)}
                    className="btn btn-square rounded-xl"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanDetails;