import React from "react";
import Image from "next/image";

const FeaturesItem = ({ photo, content ,isRev = false}) => {
  return (
    <div className={isRev?"flex  justify-around items-center flex-row-reverse": "flex flex-row justify-around items-center"}>
      <div className="flex flex-col gap-8"> 
        <h3 className="text-center text-[20px]">Your title</h3>
        <p className="max-w-[50ch] text-text-color text-[20px] ">{content}</p>
      </div>
      <div>
        <Image src={photo} />
      </div>
    </div>
  );
};

export default FeaturesItem;
