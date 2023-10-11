import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logo.png'

const NavbarHero = () => {
  return (
    <div className="bg-navbar-bg h-[628px]">
      <div className="max-w-[1076px] mx-auto flex flex-col p-12 h-full ">
        <div className="flex justify-between ">
          <div className="flex items-center justify-center gap-2 ">
            <Image src={Logo}></Image>
            <span className="font-medium text-[30px] ">Starter</span>
          </div>
          <div className="flex gap-7 text-menu-item">
            <Link href={'/'}>Github</Link>
            <Link href={'/'}>Sign in</Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full  gap-9">
          <h1 className="text-[48px] max-w-[25ch] font-bold">The Modern Landing Page For <span className="flex justify-center text-blue-text">React Developer</span></h1>
          <p className="text-[24px] text-text-color2">The easiest way to build a React landing page in seconds</p>
          <button className="outline-none text-white bg-blue-text p-4 rounded-[7px]">Download Your Free Theme</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarHero;
