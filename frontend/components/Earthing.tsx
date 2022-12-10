import { useEffect } from "react";
import React from "react";

export default function Earthing() {
  /**not just the images js**/
  useEffect(() => {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let prob1 = document.getElementById("prob1");
    let prob2 = document.getElementById("prob2");
    let goaltxt1 = document.getElementById("goaltxt1");
    let goaltxt2 = document.getElementById("goaltxt2");
    let goaltxt3 = document.getElementById("goaltxt3");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let goalY = document.getElementById("goalY");
    let join1 = document.getElementById("join1");
    let join2 = document.getElementById("join2");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      console.log(value + " value");
      if (value < 600) {
        img2!.style.top = String(value * 0.5 + "px");
      }
      if (value > 1050) {
        prob1!.style.opacity = String(1);
      }
      if (value > 1150) {
        prob2!.style.opacity = String(1);
      }
      if (value > 1900) {
        line1!.style.height = String(13.1 + "rem");
        line1!.style.visibility = String("visible");
        setTimeout(() => {
          line2!.style.visibility = String("visible");
          line2!.style.width = String(59 + "%");
          setTimeout(() => {
            line2!.style.padding = String(2 + "rem");
          }, 150);
          setTimeout(() => {
            line1!.style.borderColor = String("transparent");
            line2!.style.borderColor = String("transparent");
            setTimeout(() => {
              goalY!.style.transform = String("translateY(-2rem)");
            }, 500);
          }, 1500);
        }, 500);
        setTimeout(() => {
          setTimeout(() => {
            goaltxt1!.style.opacity = String(1);
            goaltxt2!.style.opacity = String(1);
            goaltxt3!.style.opacity = String(1);
          }, 500);

          goaltxt1!.style.height = String(12 + "rem");
          goaltxt2!.style.height = String(12 + "rem");
          goaltxt3!.style.height = String(12 + "rem");
        }, 1400);
      }
      if (value > 2300) {
        join1!.style.width = String(16 + "rem");
        join2!.style.width = String(16 + "rem");
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
