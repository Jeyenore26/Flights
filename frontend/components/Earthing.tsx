import { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
/**
 * @jest-environment jsdom
 */
export default function Earthing() {
  useEffect(() => {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (value < 600) {
        img1!.style.top = String(value * 0.5 + "px");
        img2!.style.top = String(value * 0.5 + "px");
      } else {
        window.removeEventListener;
      }
    });
  });

  return (
    <section className="absolute w-[100%] h-screen overflow-none">
      <img
        src="R.jpg"
        alt="d"
        id="img2"
        className="brightness-[0.90]"
      />
      <img
        src="trees.png"
        alt="s"
        id="img1"
        
      />
    </section>
  );
}
