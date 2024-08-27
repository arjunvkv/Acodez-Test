import React from "react";
import bg from "../assets/Banner/Rectangle 36.png";
import three from "../assets/Banner/Rectangle 37.png";
import two from "../assets/Banner/Rectangle 38.png";
import one from "../assets/Banner/Rectangle 39.png";
import person from "../assets/Banner/students 1.png";
import tick from "../assets/tick.png";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat w-full bg-cover "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:grid grid-cols-2 p-5 md:p-0">
        <div className="py-20  md:px-[140px] space-y-3">
          <div className="text-secondary">
            <p className="text-[20px] font-[700]">Premium Course</p>
            <p className="uppercase text-[35px] font-[700]">
              The early birds batch
            </p>
          </div>
          <div className="uppercase text-white">
            <p className="text-[20px] font-[700]">
              Class - 12, session 2023 - 24
            </p>
            <p className="md:text-[60px] text-[40px] font-[900]">Accountancy</p>
          </div>
          <ul className="text-white flex flex-wrap gap-x-10 gap-y-5">
            <li className="flex items-center gap-3">
              <span>
                <img src={tick} alt="tick" width="" />
              </span>
              Complete Syllabus
            </li>
            <li className="flex items-center gap-3">
              <span>
                <img src={tick} alt="tick" width="" />
              </span>
              Revision
            </li>
            <li className="flex items-center gap-3">
              <span>
                <img src={tick} alt="tick" width="" />
              </span>
              Doubt Support
            </li>
            <li className="flex items-center gap-3">
              <span>
                <img src={tick} alt="tick" width="" />
              </span>
              Test Series
            </li>
            <li className="flex items-center gap-3">
              <span>
                <img src={tick} alt="tick" width="" />
              </span>
              PDF Notes
            </li>
          </ul>
          <div className="flex gap-4 pt-10">
            <div className="line border-t-4 rounded-full border-white w-[20px]"></div>
            <div className="line border-t-4 rounded-full border-white/30 w-[20px]"></div>
            <div className="line border-t-4 rounded-full border-white/30 w-[20px]"></div>
            <div className="line border-t-4 rounded-full border-white/30 w-[20px]"></div>
          </div>
        </div>
        <div className="relative hidden md:flex h-full items-end overflow-hidden">
          <img className="absolute h-full" src={one} alt="" width="" />
          <img className="absolute h-full" src={two} alt="" width="" />
          <img
            className="absolute -right-40 w-full"
            src={three}
            alt=""
            width=""
          />
          <img
            className="relative z-2 bottom-0 left-[240px]"
            src={person}
            alt=""
            width=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
