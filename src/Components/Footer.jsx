import React from "react";
import Resume from "/src/images/Rahul-resume.pdf";

const Footer = () => {
  return (
    <div className="mt-32 text-center pop-m ">
      <h1 className="text-[24px] sm:text-[40px]"> Lets Work together</h1>
      <a
        className="text-[24px] sm:text-[40px] text-gray-600 fancy-hover"
        href="mailto:rahulfedev@gmail.com"
      >
        rahulfedev@gmail.com
      </a>
      <div className="flex justify-between px-3 mt-32 mb-3">
        <div>&copy; 2024.rahul</div>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/itsrahulr/"
            className=" pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
          >
            <span class="link1 text-base">LinkedIn</span>
            <span class="link2 text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com/itsrahulr"
            className=" pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
          >
            <span class="link1 text-base">Github</span>
            <span class="link2 text-base">Github</span>
          </a>
          <a
            href={Resume}
            className=" pop-r link-text group relative block h-fit overflow-hidden font-medium leading-base"
            download={true}
          >
            <span class="link1 text-base">Resume</span>
            <span class="link2 text-base">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
