import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-[#C2F800]">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        PAGE NOT FOUND
      </h2>

      <p className="text-[#9CA3AF] mt-2 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-[#C2F800] text-black font-semibold px-5 py-3 rounded-xl"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;