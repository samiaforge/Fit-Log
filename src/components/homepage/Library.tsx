import React from "react";
import LibraryCard from "./LibraryCard";

const getLibrary = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <section id="library" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-2">
          <h1 className="text-2xl font-bold">THE LIBRARY</h1>

          <p className="text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-18">
          {libraryData.map((workout: any) => (
            <LibraryCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;