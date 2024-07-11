import React from "react";
import HeroPage from "../../assets/HeroPage.png";
import m1 from "../../assets/m1.png";

const Introduction = ({ setShowModal }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center relative mx-10 overflow-hidden items-center border-2 bg-[#EEF5FF] md:h-[600px] mb-3  shadow-lg rounded-xl">
      <span>
        <img
          src={m1}
          className="w-[157px] h-[87] absolute -top-10  transform rotate-90 overflow-hidden -left-2"
          alt=""
        />
      </span>
      <div className="md:w-2/5 flex flex-col justify-center  items-center md:items-start p-4">
        <h1 className="text-secondary w-full text-4xl md:text-5xl font-bold mb-4">
          Let's Learn & Earn
        </h1>
        <p className="text-secondary text-2xl mb-4">
          Get a chance to win up to{" "}
          <span className="text-primary">RS 15,000</span>
        </p>
        <button className="w-[194px] h-[54px] border-2 leading-6 px-2 text-sm bg-primary text-white font-medium rounded-lg" onClick={()=>setShowModal(true)}>
          Refer Now
        </button>
      </div>

      <div className="md:w-4/5 w-full h-full relative">
        <span>
          <img
            src={m1}
            className="w-[157px] h-[87]   absolute bottom-5  z-20 transform -rotate-90 overflow-hidden left-10"
            alt=""
          />
        </span>
        <img
          className="w-full h-full object-cover z-50 "
          src={HeroPage}
          alt="Hero"
        />
        <span>
          <img
            src={m1}
            className="w-[157px] h-[87]   absolute bottom-[40%]  z-10 transform -rotate-90  right-20"
            alt=""
          />
        </span>
      </div>
      <span>
        <img
          src={m1}
          className="w-[157px] h-[87]  z-10 absolute -top-10  transform -rotate-90 overflow-hidden -right-2"
          alt=""
        />
      </span>
    </div>
  );
};

export default Introduction;
