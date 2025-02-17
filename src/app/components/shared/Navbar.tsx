"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

interface NavMenu {
  title: string;
  path: string;
}

const navMenu: NavMenu[] = [
  {
    title: "Destination",
    path: "",
  },
  {
    title: "Stories",
    path: "",
  },
  {
    title: "Reviews",
    path: "",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="py-4 md:px-10 lg:px-20 flex  items-center justify-between w-full">
      <div className="px-4 md:px-0 flex justify-between items-center w-full">
        <Image
          src="/images/Logo.svg"
          width={97}
          height={80}
          className="md:w-[97px] md:h-[80px] w-[61px] h-[50px]"
          alt="Logo"
        />

        <nav className="text-white hidden md:flex">
          <ul className="flex items-center gap-x-[72px]">
            {navMenu.map((menu, index) => (
              <li key={index}>
                <Link href={menu.path} className="font-bold text-2xl">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-x-[43px]">
          <button>
            <Image
              src="/images/search.svg"
              alt="icon"
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
          </button>
          <div className="flex items-center gap-x-6">
            <button className="text-white font-bold text-2xl">Sign Up</button>
            <button className="bg-white text-black py-2.5 px-10 rounded-[40px] font-bold text-2xl">
              Login
            </button>
          </div>
        </div>
        {/* mobile section starts here */}
        <div className="md:hidden flex">
          <button type="button" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt4 className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {/* Side menu */}
      {isMenuOpen && (
        <div
          className={`fixed bg-[#4169E1] top-[80px] h-screen py-8 px-5 flex flex-col items-center justify-center md:hidden w-full z-40`}
        >
          <span className="text-white font-semibold text-lg">
            Nothing to see here, go away
          </span>
        </div>
      )}
    </section>
  );
};

export default Navbar;
