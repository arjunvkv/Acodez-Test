import React from "react";
import toLeft from "../assets/JoinUs/Vector 15.png";
import toRight from "../assets/JoinUs/Vector 14.png";
import one from "../assets/JoinUs/OBJECTS.png";
import two from "../assets/JoinUs/OBJECTS-1.png";
import three from "../assets/JoinUs/Group 26.png";
import four from "../assets/JoinUs/Call_center_character_1_.png";
import five from "../assets/JoinUs/Group-1.png";
import six from "../assets/JoinUs/Group-2.png";

const Analytics = () => {
  return (
    <div className="container py-20">
      <h1 className="text-[40px] font-[700] text-primary max-w-[780px] md:text-center px-10 md:px-0 mx-auto">
        Join us at DeeCee, where educational excellence meets limitless
        possibilities.
      </h1>
      <div>
        <div className="flex w-full justify-start">
          <div className="grid grid-cols- gap-10 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  Master Every Detail:
                </span>
                Comprehensive Course Revisions
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                Our commitment to excellence includes multiple course revisions
                and dedicated support classes. Our goal? Ensuring students
                achieve mastery of every detail.
              </p>
            </div>
            <img src={one} alt="background" width="" className="col-span-3" />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <img className="h-44 hidden md:block" src={toLeft} alt="" width="" />
          <div className="grid md:grid-cols-9 gap-10 mt-14 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <img src={two} alt="background" width="" className="col-span-3" />
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  Unlimited Access:
                </span>
                Recorded Lectures for Seamless Revisions
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                Gain unlimited viewing access to recorded live classes within
                the app. Seamlessly revise, reinforcing a strong grasp on
                concepts whenever and wherever you choose.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <div className="grid md:grid-cols-9 gap-10 mt-14 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  Disciplined Evaluation:
                </span>
                Testing for Progress
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                Progress through regular topic, unit, and full syllabus tests.
                Our time-bound assessments reveal strengths and weaknesses, with
                MCQ tests aligning with competitive exams.
              </p>
            </div>
            <img src={three} alt="background" width="" className="col-span-3" />
          </div>
          <img className="h-44 hidden md:block" src={toRight} alt="" width="" />
        </div>
        <div className="flex w-full justify-end">
          <img className="h-44 hidden md:block" src={toLeft} alt="" width="" />
          <div className="grid md:grid-cols-9 gap-10 mt-14 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <img src={four} alt="background" width="" className="col-span-3" />
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  3-Way Doubt Support:
                </span>
                Clearing Concepts, Your Way
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                With 3-way doubt support-call, text, or live doubt classes-we
                ensure students have complete clarity on all concepts,
                empowering their learning journey.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <div className="grid md:grid-cols-9 gap-10 mt-14 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  Structured Study Material:
                </span>
                Your Efficient Learning Path
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                Our meticulously designed study material caters to every
                student's needs. With precisely structured content, you save
                time and dive deep without exploring multiple sources.
              </p>
            </div>
            <img src={five} alt="background" width="" className="col-span-3" />
          </div>
          <img className="h-44 hidden md:block" src={toRight} alt="" width="" />
        </div>
        <div className="flex w-full justify-end">
          <img className="h-44 hidden md:block" src={toLeft} alt="" width="" />
          <div className="grid md:grid-cols-9 gap-10 mt-14 max-w-[880px] p-10 shadow-md items-center place-items-baseline rounded-xl">
            <img src={six} alt="background" width="" className="col-span-3" />
            <div className="col-span-6 space-y-2">
              <p className="text-[20px]">
                <span className="font-[700] text-primary pr-2">
                  Guidance Beyond:
                </span>
                Regular Mentorship and Counselling
              </p>
              <div className="border-2 rounded-full border-[#33C7CA] w-[25px]"></div>
              <p className="text-[#1E1E1E]/80">
                Beyond academics, we offer regular motivational sessions and
                counseling. We illuminate diverse career paths, guiding students
                toward informed decisions and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
