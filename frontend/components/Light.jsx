import React from "react";

function Light(props) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

export default Light;