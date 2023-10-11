import React from "react";
import FeaturesItem from "./featuresItem";
import Fphoto1 from '../../../public/Feature1.png'
import Fphoto2 from '../../../public/Feature2.png'
import Fphoto3 from '../../../public/Feature3.png'
const Features = () => {
  const contents ={
      'content1' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      'content2' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      'content3' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'
  }
  return (
    <div className=" max-w-[1076px] w-[1076px] mx-auto">
      <div className="flex justify-center items-center flex-col gap-8">
        <h1 className="font-bold text-[36px] text-black-text ">
          Your title here
        </h1>
        <p className="text-[20px] max-w-[80ch] text-center drop-shadow-]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </p>
      </div>
      <div className="flex flex-col gap-36 mt-24">
        <FeaturesItem photo={Fphoto1} content={contents.content1}/>
        <FeaturesItem photo={Fphoto2} content={contents.content2} isRev={true}/>
        <FeaturesItem photo={Fphoto3} content={contents.content3}/>
        
      </div>
      
    </div>
  );
};

export default Features;
