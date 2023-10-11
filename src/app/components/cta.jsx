import React from "react";

const Cta = () => {
  return (
    <div className="w-full h-[194px] bg-cta-bg max-w-[1076px] mx-auto flex flex-row justify-around items-center rounded-[10px]">
      <div className="font-medium text-[21px] flex flex-col gap-5">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="text-blue-text">Start your Free Trial.</p>
      </div>
      <div>
        <button className="text-[16px] bg-cta-blue py-1 px-7 rounded-lg text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
