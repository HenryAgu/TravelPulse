import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4169E1] h-full">
      <div className="flex flex-col gap-y-2 items-center justify-center py-32">
        <Image
          src="/images/Logo.svg"
          width={97}
          height={80}
          className="w-[97px] h-[80px]"
          alt="Logo"
        />
        <span className="text-white font-semibold text-lg">© 2023 Travel Pulse. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
