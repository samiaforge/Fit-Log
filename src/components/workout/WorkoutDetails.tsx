import Image from "next/image";
import React from "react";

const WorkoutDetailsPage = ({ workout }) => {
  if (!workout) {
    return <p>Workout not found</p>;
  }

  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    difficulty,
    sets,
    reps,
    description,
    instructions,
  } = workout;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Workout Image */}
        <div className="w-full h-[350px] sm:h-[450px] lg:h-full">
          <Image
            src={image}
            alt={name}
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/*Workout Information */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase">{name}</h1>

          <p className="text-[#9CA3AF] mt-4 leading-relaxed">{description}</p>

          <div className="flex gap-2 mt-5">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="badge bg-[#C2F800] text-black font-bold"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">KEY SPECS</h2>

            <div className="overflow-x-auto bg-[#1c1f26] boredr rounded-2xl">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">EQUIPMENT</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{equipment}</td>
                  </tr>

                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">DIFFICULTY</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{difficulty}</td>
                  </tr>

                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">SETS</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{sets}</td>
                  </tr>

                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">REPS</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{reps}</td>
                  </tr>

                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">DURATION</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{duration} min</td>
                  </tr>

                  <tr className="border-b border-gray-700">
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">CALORIES</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">
                      {caloriesBurned} kcal
                    </td>
                  </tr>

                  <tr>
                    <th className="py-4 pl-4 sm:pl-7 text-left text-[#9CA3AF] font-semibold">RATING</th>
                    <td className="py-4 pr-4 sm:pr-7 text-right text-white">{rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">INSTRUCTIONS</h2>

            <ol className="list-decimal list-inside space-y-3 text-[#9CA3AF]">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="btn bg-[#C2F800] text-black flex-1 rounded-2xl">
              <i className="fa-solid fa-plus"></i>
              Add to today's plan
            </button>

            <button className="btn flex-1 border border-gray-500 rounded-2xl">
              <i className="fa-regular fa-bookmark"></i>
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
