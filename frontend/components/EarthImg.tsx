import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function EarthImg() {
  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-20}>
          <img
            src="./earthing.jpg"
            alt="s"
            className="absolute mt-[-7px] z-[-1] h-[100vh] top-[-12rem] brightness-50"
          />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default EarthImg;