import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <section className="py-5 px-20 flex items-center justify-between">
      <Image
        src="/images/Logo.svg"
        width={97}
        height={80}
        className="w-[97px] h-[80px]"
        alt="Logo"
      />
      <nav className="text-white">
        <ul className="flex items-center gap-x-[72px]">
          {navMenu.map((menu, index) => (
            <li key={index}>
              <Link href={menu.path} className="font-bold text-2xl">{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-[43px]">
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
          <button className="bg-white text-black py-2.5 px-10 rounded-[40px] font-bold text-2xl">Login</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
