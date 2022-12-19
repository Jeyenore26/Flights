import css from "../styles/Home.module.css";

import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { Suspense , useState } from "react";
import TopSection from '../TopSection';
import { PerformanceMonitor , Html, useProgress } from "@react-three/drei";
export default function Home() {
  const [dpr, setDpr] = useState(1.5)
  const { progress } = useProgress()
  return (
    <div className="flex justify-center align-center">
      <Suspense fallback = {<span>loading....</span>}>
      <div className="self-center	justify-self-center	w-[100%] h-screen">
        {progress > 99 && (
          <TopSection />
        )}
         {progress < 100 && (
            <div className = 'absolute inset-x-0 z-50 w-full top-14 bottom-0 grid place-items-center'>
             <div className={css.loader}><div></div><div></div></div>
            </div>
        )}
        <Canvas
          performance={{ min: 0.5 }}
          shadows={true}
          className="bg-[#010718]"
          camera={{
            fov: 50,


          }}
        >   
          <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />


          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
        </Canvas>

      </div>
      </Suspense>

    </div>
  );
}