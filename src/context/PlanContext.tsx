"use client";
import { createContext, useState } from "react";
import React from 'react';
import { Workout } from "@/types/workout";



interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  addToSaved: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
}

export const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);



const PlanProvider = ({ children }: any) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) => [...prev, workout]);
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  const addToSaved = (workout: Workout) => {
    setSaved((prev) => [...prev, workout]);
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== id));
  };



    return (
        <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
    );
};

export default PlanProvider;