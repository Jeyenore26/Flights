import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import OrbitControls from "./OrbitControls";
import Light from "./Light";
import { Suspense } from "react";
import TopSection from './TopSection';
export default function Home() {

  return (
    <div className="flex justify-center align-center">
      <div className={css.scene}>
        <TopSection />
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{
            fov: 50,


          }}
        >

          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
          <OrbitControls />
        </Canvas>

      </div>

    </div>
  );
}