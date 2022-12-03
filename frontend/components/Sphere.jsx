import React, { useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { Clock, TextureLoader } from "three";
import * as THREE from 'three'
import { Stars } from '@react-three/drei'
function Sphere() {
  const [texture, bump, cloud] = useLoader(TextureLoader, ["/earth.jpg", '/bump.jpg', '/specular.jpg']);
  const [colorMap, normalMap, cloudMap, specularMap] = useLoader(TextureLoader, ['/8k_earth_daymap.jpg', '/8k_earth_normal_map.jpg', '/8k_earth_clouds.jpg', '/8k_earth_specular_map.jpg'])
  const bumpscale = 10
  const earthRef = React.useRef()
  const cloudRef = React.useRef()

  useFrame(({ clock }) => {
    const elapsedtime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedtime / 6
    cloudRef.current.rotation.y = elapsedtime / 6


  })

  return (
    <>
      <pointLight color='#f6f3ea' position={[20, 0, 20]} intensity={1.2} />

      <Stars radius={300} depth={60} count={20000} factor={9} saturation={0} fade={true} />
      <mesh
        ref={cloudRef}
        scale={2}

      >

        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} />
      </mesh>
      <mesh
        ref={earthRef}
        scale={2}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  );
}

export default Sphere;