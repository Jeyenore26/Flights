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
      function widther() {
        if (value === 0) {
          img1!.style.width = String(50 + "%");
          console.log("width is " + img1!.style.width);
          console.log(value + " value");
        } else {
          img1!.style.width = value * 1 + "rem";
        }
      }
      widther();
    });
  });

  return (
    <section className="absolute w-[100%] h-screen p-[100px] overflow-hidden">
      <img
        src="https://cdn.wallpapersafari.com/34/39/mKGeuZ.jpg"
        alt="s"
        id="img2"
        className="brightness-[0.80]"
      />

      <img
        src="https://wallpapershome.com/images/wallpapers/tuscany-3840x2160-5k-4k-wallpaper-8k-italy-landscape-village-field-558.jpg"
        alt="s"
        id="img1"
        className="brightness-[0.60]"
      />
    </section>
  );
}
