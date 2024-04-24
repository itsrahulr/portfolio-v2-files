import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const nav = useRef(null);
  useEffect(() => {
    const e = nav.current;
    gsap.fromTo(e, { y: -70 }, { y: 0, duration: 0.7, delay: 0.7 });
  }, []);

  return (
    <div
      className=" flex justify-center items-center pt-5  sticky top-0 z-10"
      ref={nav}
    >
      <nav className="bg-gray-100 p-2 flex gap-5 pop-r rounded-full">
        <Link
          className=" pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
          to="/"
        >
          <span class="link1 text-base">Home</span>
          <span class="link2 text-base">Home</span>
        </Link>
        <Link
          className="pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
          to="/about"
        >
          <span class="link1 text-base">Profile</span>
          <span class="link2 text-base">Profile</span>
        </Link>
        <Link
          className="pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
          to="/contact"
        >
          <span class="link1 text-base">Contact</span>
          <span class="link2 text-base">Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
