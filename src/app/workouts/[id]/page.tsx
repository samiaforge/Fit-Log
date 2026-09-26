import WorkoutDetailsPage from "@/components/workout/WorkoutDetails";
import React from "react";
import { Workout } from "@/types/workout";

interface IWorkoutDetailProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (): Promise<Workout[]> => {
  const res = await fetch( "https://api.api-store.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  const data: Workout[] = await res.json();

  return data;
};


const WorkoutPage = async ({ params }: IWorkoutDetailProps) => {
  const { id } = await params;

  const workoutData = await getWorkout();

  const workout = workoutData.find(
    (workout: Workout) => String(workout.id) === String(id)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div>
      <WorkoutDetailsPage workout={workout} />
    </div>
  );
};

export default WorkoutPage;