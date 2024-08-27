import React from "react";
import computing from "../assets/Reviews/Group 24.png";
import fourFold from "../assets/Reviews/Vector 6.png";
import threeFold from "../assets/Reviews/Vector 7.png";
import twoFold from "../assets/Reviews/Vector 8.png";
import oneFold from "../assets/Reviews/Vector 9.png";

const Reviews = () => {
  return (
    <div className="container py-20">
      <div className="md:grid flex flex-col-reverse grid-cols-12 pb-20 place-items-center items-end text-primary gap-10">
        <img src={computing} alt="" className="col-span-4" />
        <p className="col-span-7 text-[40px] font-[700] text-center md:text-left">
          Students love us. Choose excellence. Choose success. Choose DeeCee.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-10 place-items-center">
        <div className="bg-[#7DF1B8]/20 h-fit w-full px-7 py-6 rounded-xl relative">
          <img
            className="absolute right-0 top-0"
            src={oneFold}
            alt=""
            width=""
          />
          <p className="text-[18px] font-[400] -my-1">views</p>
          <p>
            <span className="text-[40px] font-[800] pr-3 text-primary">
              500M<span className="text-alt-primary">+</span>
            </span>
            Views
          </p>
        </div>
        <div className="bg-[#84BFF2]/20 h-fit w-full px-7 py-6 rounded-xl relative">
          <img
            className="absolute right-0 top-0"
            src={twoFold}
            alt=""
            width=""
          />
          <p className="text-[18px] font-[400] -my-1">Happy Learners</p>
          <p>
            <span className="text-[40px] font-[800] pr-3 text-primary">
              2M<span className="text-alt-primary">+</span>
            </span>
            Views
          </p>
        </div>
        <div className="bg-[#FFBE46]/20 h-fit w-full px-7 py-6 rounded-xl relative">
          <img
            className="absolute right-0 top-0"
            src={threeFold}
            alt=""
            width=""
          />
          <p className="text-[18px] font-[400] -my-1">
            Total Classes Watch Time
          </p>
          <p>
            <span className="text-[40px] font-[800] pr-3 text-primary">
              1.8M<span className="text-alt-primary">+</span>
            </span>
            Views
          </p>
        </div>
        <div className="bg-[#FFA08C]/10 h-fit w-full px-7 py-6 rounded-xl relative">
          <img
            className="absolute right-0 top-0"
            src={fourFold}
            alt=""
            width=""
          />
          <p className="text-[18px] font-[400] -my-1">Questions Solved</p>
          <p>
            <span className="text-[40px] font-[800] pr-3 text-primary">
              1Lac<span className="text-alt-primary">+</span>
            </span>
            Views
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
