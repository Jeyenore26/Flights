import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import OrbitControls from "../components/OrbitControls";
import Light from "../components/Light";
import Floor from "../components/Floor";
import Draggable from "../components/Draggable";
import { Suspense } from "react";
import TopSection from '../components/TopSection'
export default function Home() {
  return (
    <div className="flex justify-center align-center">
      <div className={css.scene}>
        <TopSection />
        <Canvas
          shadows={true}
          className={css.canvas}
          camera={{
            fov: 55,

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