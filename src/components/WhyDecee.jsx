import React from "react";
import group from "../assets/Group.png";
import maskGroup from "../assets/Mask group.png";
import Button from "./Button";

const WhyDecee = () => {
  return (
    <div className="bg-custom-gradient w-full h-full py-28 relative">
      <img
        className="absolute hidden md:block bottom-0 right-0"
        src={maskGroup}
        alt=""
        width=""
      />
      <div className="container grid md:grid-cols-5 p-5 md:p-0 place-items-center gap-10">
        <img src={group} alt="" className="col-span-2 relative z-10" />
        <div className="col-span-3 space-y-3 text-white">
          <h1 className="text-[45px] font-[700]">Why DeeCee?</h1>
          <div className="text-[20px] space-y-3">
            <p>
              Since its inception in 2021, DeeCee has been dedicated to guiding
              students towards excellence in their commerce subjects. From
              humble beginnings in a small room, this initiative by Rajat Sir
              has flourished into a dynamic educational force, now reaching over
              2 million learners through our innovative app and engaging YouTube
              channels.
            </p>
            <p>
              Our commitment to delivering concise and impactful content has
              propelled countless students to achieve remarkable success in
              their Class 12 Examinations, securing placements in prestigious
              universities across the nation. Our streamlined content delivery
              methodology has paved the way for their achievements.
            </p>
          </div>
          <div className="py-2">
            <Button label="Read more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDecee;
