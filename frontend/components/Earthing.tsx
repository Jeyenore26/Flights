import { useEffect } from "react";
import React from "react";

export default function Earthing() {
  /**not just the images js**/
  useEffect(() => {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let problems = document.getElementById("problems");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      if (value < 600) {
        img2!.style.top = String(value * 0.5 + "px");
      } else {
        window.removeEventListener;
      }
      if (value > 1450) {
        problems!.style.visibility = String("visible");
        problems!.style.width = String(100 + "%");
      }
    });
  });

  return (
    <section className="absolute w-[100%] h-screen overflow-hidden">
      <img src="R.jpg" alt="d" id="img2" className="brightness-[0.80]" />
      <img src="trees.png" alt="s" id="img1" />
    </section>
  );
}
