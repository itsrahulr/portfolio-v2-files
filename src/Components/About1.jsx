import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import mypic from "/src/images/mypic.png";
import Footer from "./Footer";

const About1 = () => {
  const abt = useRef(null);
  useEffect(() => {
    const e = abt.current;
    gsap.fromTo(
      e,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 1.5 }
    );
  }, []);
  return (
    <div className="flex justify-center my-32 " ref={abt}>
      <div className=" w-full sm:w-11/12 md:w-10/12  ">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[40px]  pop-m text-center">
          Hey I'm Rahul
        </h1>
        <div className="flex justify-center">
          <img className="my-32 p-3 w-[500px]" src={mypic} alt="" />
        </div>
        <div>
          <h1 className="text-[24px] sm:text-[28px] lg:text-[40px]  pop-m text-center">
            A Front-end developer based in Chennai , india.I build Front-end of
            Websites and Web Applications that leads to the success of the
            overall product.
          </h1>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About1;
