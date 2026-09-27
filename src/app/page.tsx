import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
     <Banner/>
       <Suspense
        fallback={
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="loading loading-spinner loading-lg"></span>

              <p className="text-[#9CA3AF]">
                Loading workouts...
              </p>
            </div>
          </div>
        }
      >
        <Library />
      </Suspense>
    </div>
    
 
  );
}
