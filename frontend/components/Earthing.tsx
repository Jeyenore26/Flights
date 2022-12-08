import { useEffect } from "react";
import React from "react";

export default function Earthing() {
  /**not just the images js**/
  useEffect(() => {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let prob1 = document.getElementById("prob1");
    let prob2 = document.getElementById("prob2");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value + " value");
      if (value < 600) {
        img2!.style.top = String(value * 0.5 + "px");
      } else {
        window.removeEventListener;
      }
      if (value > 1050) {
        console.log("done");
        prob1!.style.opacity = String(1);
      }
      if (value > 1150) {
        console.log("done2");
        prob2!.style.opacity = String(1);
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
