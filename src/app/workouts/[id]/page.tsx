import WorkoutDetailsPage from '@/components/workout/WorkoutDetails';
import React from 'react';
import { Workout } from "@/types/workout";

interface IWorkoutDetailProps {
    params : Promise<{
        id:string
    }>
}

const getWorkout = async(): Promise<Workout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}
const WorkoutPage = async({ params }: IWorkoutDetailProps) => {
    const {id} = await params
    const workoutData = await getWorkout()
    const workout = workoutData.find((workout:Workout) => String(workout.id) === String(id))
    console.log(workoutData)

    return (
        <div>
              <WorkoutDetailsPage workout={workout} />
        </div>
    );
};

export default WorkoutPage;