import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="grid grid-cols-3 h-screen relative w-full">
      <div className="h-full bg-[url('/images/hero-image1.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-end">
        <div className="p-5 flex items-end justify-end">
          <div className="flex justify-between items-end w-full">
            <p className="max-w-[364px] text-white font-semibold text-[42px] leading-[50px]">
              Fun Trip to the Pyramid of Giza, Egypt
            </p>
            <Image
              src="/images/arrow.svg"
              width={50}
              height={48}
              className="h-[50px] w-[48px]"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="h-full bg-[url('/images/hero-image2.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-end">
        <div className="p-5 flex items-end justify-end">
          <div className="flex justify-between items-end w-full">
            <p className="max-w-[364px] text-white font-semibold text-[42px] leading-[50px]">
              Fun Trip to the Pyramid of Giza, Egypt
            </p>
            <Image
              src="/images/arrow.svg"
              width={50}
              height={48}
              className="h-[50px] w-[48px]"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="h-full bg-[url('/images/hero-image3.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-end">
        <div className="p-5 flex items-end justify-end">
          <div className="flex justify-between items-end w-full">
            <p className="max-w-[364px] text-white font-semibold text-[42px] leading-[50px]">
              Fun Trip to the Pyramid of Giza, Egypt
            </p>
            <Image
              src="/images/arrow.svg"
              width={50}
              height={48}
              className="h-[50px] w-[48px]"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full">
        <Navbar/>
      </div>
    </section>
  );
};

export default Hero;
