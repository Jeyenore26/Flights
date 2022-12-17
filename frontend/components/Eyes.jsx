import { useState, useEffect, useRef } from "react";

function Eyes() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();
  const eyeRight = useRef();

  const eyeBrowLeft = useRef();
  const eyeBrowRight = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -18;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

    eyeBrowLeft.current.style.transform = `translateY(${event.clientY / 50}px)`;
    eyeBrowRight.current.style.transform = `translateY(${
      event.clientY / 50
    }px)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App  -mt-5">
                <img src='./LogoIcon.png' className='w-[10rem] h-[10rem] absolute z-0 brightness-75 xxs:hidden 2xl:block xl:blocl lg:block md:block xs:hidden'/>

      <div className="eyebrow_container mb-2">
       <div className="flex ">
       <div ref={eyeBrowLeft} ></div>
        <div ref={eyeBrowRight}></div>
       </div>
      </div>
     <div>
     <div className="eye_container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}
          className="eye"
        ></div>
        <div
          ref={eyeRight}
          style={{
            transform: `rotate(${calcAngle(eyeRight)}deg)`,
          }}
          className="eye"
        ></div>
        <div className="mouth mx-auto">
           
           </div>
      </div>
      
     </div>
    </div>
  );
}

export default Eyes;