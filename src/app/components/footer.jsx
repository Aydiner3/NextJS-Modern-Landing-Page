import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Linked from '../../../public/Linkedin.png'
import At from '../../../public/At.png'
import Github from '../../../public/Githug.png'
import Twitter from '../../../public/Twitter.png'
import Youtube from '../../../public/Youtube.png'
import Wifi from '../../../public/Wifi.png'
import Facebook from '../../../public/Facebook.png'


const Footer = () => {
  return (
    <div className="max-w-[1076] bg-navbar-bg">
      <div className="flex flex-col items-center justify-center gap-7 p-12">
        <div>
          <div className="flex items-center justify-center ">
            <Image src={Logo} width={32} height={32}></Image>
            <span className="font-medium text-[20px] ">Starter</span>
          </div>
        </div>
        <div className="flex flex-row gap-9 text-[20px] font-light text-menu-item">
          <Link href={'/'} >Home</Link>
          <Link href={'/'} >About</Link>
          <Link href={'/'} >Docks</Link>
          <Link href={'/'} >GitHub</Link>
        </div>
        <div className="flex flex-row gap-5">
            <Image src={Github} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={Facebook} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={Twitter} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={Youtube} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={Linked} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={At} alt="LinkedIn" className="w-[20px] h-[20px] "/>
            <Image src={Wifi} alt="LinkedIn" className="w-[20px] h-[20px] "/>
        </div>
        <p> Powered with ♥ by Ahmet Aydın ER</p>
      </div>
    </div>
  );
};

export default Footer;
