import Image from "next/image";
import React from "react";
import Link from "next/link";

const LibraryCard = ({ workout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;
  return (
    <Link href={`/workouts/${id}`}>
      <div>
        <div className="card w-full rounded-2xl overflow-hidden bg-base-100 shadow-sm">
          {/* Image */}
          <Image
            src={image}
            alt={name}
            width={800}
            height={600}
            className="h-52 w-full object-cover"
          />

          {/* Card Body */}
          <div className="card-body bg-[#1a1c23]">
            <div className="flex gap-2 pb-2">
              {muscleGroups.map((group) => (
                <span
                  key={group}
                  className="badge bg-[#ccff00] text-black font-bold"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="border-b border-gray-700 pb-3">
              <h2 className="card-title">{name}</h2>
              <p className="text-[#9CA3AF]">{equipment}</p>
            </div>

            <div className="flex gap-3 text-[#9CA3AF] pt-1">
              <span>
                <i className="fa-regular fa-clock"></i> {duration} min
              </span>
              <span>
                <i className="fa-solid fa-fire "></i> {caloriesBurned} kcal
              </span>
              <span>
                <i className="fa-regular fa-star "></i> {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
