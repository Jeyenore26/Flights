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
    let img3 = document.getElementById("img3");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      img1!.style.top = String(value * 0.25 + "px");
      img2!.style.left = String(value * 0.5 + "px");
      img3!.style.left = String(value * -0.5 + "px");
    });
  });

  return (
    <section className="absolute w-[100%] h-screen p-[100px] overflow-hidden">
      <img
        src="https://www.freepnglogos.com/uploads/tree-png/home-tree-images-vector-clip-34.png"
        alt="s"
        id="img3"
      />
      <img
        src="https://www.freepnglogos.com/uploads/tree-png/home-tree-images-vector-clip-34.png"
        alt="s"
        id="img2"
      />
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_2t/6355.jpg"
        alt="s"
        id="img1"
      />
    </section>
  );
}
