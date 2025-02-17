import Image from "next/image";
import React from "react";
import Navbar from "./shared/Navbar";

interface HeroGrids {
  backgroundImage: string;
  text: string;
}

const heroGrids: HeroGrids[] = [
  {
    backgroundImage: "/images/hero-image1.png",
    text: "Fun Trip to the Pyramid of Giza, Egypt",
  },
  {
    backgroundImage: "/images/hero-image2.png",
    text: "Unmissable places to visit on your next Travel to Jamaica",
  },
  {
    backgroundImage: "/images/hero-image3.png",
    text: "Fun fact about Bay of Islands, New Zealand.",
  },
];

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 h-full md:h-screen relative w-full">
      {heroGrids.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.backgroundImage})` }}

          className={`h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-end`}
        >
          <div className="p-4 md:p-8 flex md:hidden lg:flex items-end justify-end">
            <div className="flex justify-between items-end w-full">
              <p className="max-w-[364px] text-white font-semibold md:text-[42px] text-2xl md:leading-[50px]">
                {item.text}
              </p>
              <Image
                src="/images/arrow.svg"
                width={50}
                height={48}
                className="md:h-[50px] md:w-[48px] w-8 h-8"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute w-full">
        <Navbar />
      </div>
    </section>
  );
};

export default Hero;
