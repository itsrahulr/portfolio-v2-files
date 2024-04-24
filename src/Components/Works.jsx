import React, { useEffect, useRef } from "react";
import p1 from "/src/images/cafe.png";
import gsap from "gsap";
import p2 from "/src/images/unifloe.png";
import p3 from "/src/images/techy.png";
import p4 from "/src/images/cloth.png";
import p5 from "/src/images/port1.png";
import p6 from "/src/images/port2.png";

function Cards(props) {
  return (
    <>
      <div>
        <a href={props.link}>
          {" "}
          <img className="w-[500px]" src={props.src} alt="" />
          <p className="pop-r">{props.name}</p>
        </a>
      </div>
    </>
  );
}
const Works = () => {
  const works = useRef(null);
  useEffect(() => {
    const e = works.current;
    gsap.fromTo(
      e,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 1.7 }
    );
  }, []);
  return (
    <>
      <div className="  flex justify-center " ref={works}>
        <div className=" p-3 flex flex-col md:flex md:flex-row justify-center gap-5  ">
          <Cards
            src={p1}
            name="Cafe - 2024"
            link="https://cafe-latest.netlify.app/"
          />
          <Cards
            src={p2}
            name="Unifloe - 2024"
            link="https://unifloe.netlify.app/"
          />
        </div>
      </div>
      <div className="  flex justify-center ">
        <div className=" p-3 flex flex-col md:flex md:flex-row justify-center gap-5  ">
          <Cards
            src={p3}
            name="Techy-software - 2024"
            link="https://techy12345.netlify.app/"
          />
          <Cards
            src={p4}
            name="The cloth store-landing page - 2024"
            link="https://theclothstore.netlify.app/"
          />
        </div>
      </div>
      <div className="  flex justify-center ">
        <div className=" p-3 flex flex-col md:flex md:flex-row justify-center gap-5  ">
          <Cards
            src={p5}
            name="My portfolio-v1 - 2024"
            link="https://itsrahulr-v1.netlify.app/"
          />
          <Cards src={p6} name="My portfolio-v2- 2024" link="/" />
        </div>
      </div>
    </>
  );
};

export default Works;
{
  /* <div className=" p-3 flex flex-col md:flex md:flex-row justify-center gap-5  ">
<Cards src={p3} name="Cafe - 2024" />
<Cards src={p4} name="Unifloe - 2024" />
</div>
<div className=" p-3 flex flex-col md:flex md:flex-row justify-center gap-5  ">
<Cards src={p5} name="Cafe - 2024" />
<Cards src={p6} name="Unifloe - 2024" />
</div> */
}
