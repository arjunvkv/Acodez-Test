import React from "react";
import phone from "../assets/phone.png";
import logo from "../assets/logo.png";
import Button from "./Button";

const Nav = () => {
  return (
    <>
      <div className="bg-primary py-2 nav-1">
        <div className="container font-bold flex justify-between">
          <div className="ph flex gap-2 text-secondary items-center">
            <img className="w-auto h-fit" src={phone} alt="phone" />
            <p className="tracking-widest">011-40848482</p>
          </div>
          <ul className="text-white flex gap-7">
            <li>Blog</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="nav-2 container py-4 flex justify-between">
        <img src={logo} alt="" width="" />
        <ul className="md:flex items-center gap-7 font-[400] hidden">
          <li>Courses Offered </li>
          <li>Join our Live Classes</li>
          <li>Free Videos </li>
          <li>Study Material</li>
          <li>
            <Button label="Contact Us" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
