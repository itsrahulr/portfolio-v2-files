import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const hero = useRef(null);
  useEffect(() => {
    const e = hero.current;
    gsap.fromTo(
      e,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 1.5 }
    );
  }, []);
  return (
    <div className="flex justify-center my-32 " ref={hero}>
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-1/2   ">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[40px]  pop-m text-center">
          An Open-Minded Front-End Developer Eagerly Embracing New Opportunities
        </h1>
      </div>
    </div>
  );
};

export default Hero;
