"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Navigation = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationOptions = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT US",
      href: "/about",
    },
    {
      name: "SERVICES",
      href: "/services",
    },
    {
      name: "CONTACT",
      href: "/#contact",
    },
  ];

  return (
    <nav className="bg-primary/10 fixed top-5 z-20 w-full px-5 h-0">
      <div className="flex items-center justify-between h-24 bg-tertiary border border-transparent rounded-lg px-7">
        <div className="flex items-center w-32">
          <Image
            src="/Logo.png"
            alt="Task Masters Logo"
            width={1000}
            height={1000}
            loading="eager"
            className="object-contain"
            priority
            quality={100}
          />
        </div>

        <div className="hidden md:block">
          <div className="flex items-center gap-6">
            {navigationOptions.map((option, index) => (
              <Link
                key={option.name}
                href={option.href}
                className={`text-gray-800 hover:text-secondary group relative font-bold ${
                  index === 0 ? "" : "hover:text-secondary"
                }`}
              >
                {option.name}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
            <button className="bg-secondary text-white px-8 py-2 rounded-xl hover:opacity-80 font-bold">
              APPLY
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
          >
            <span
              className={`block w-full h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-3" : ""}`}
            ></span>
            <span
              className={`block w-full h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-full h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6 bg-tertiary mt-2 rounded-lg">
          {navigationOptions.map((option) => (
            <Link
              key={option.name}
              href={option.href}
              className="text-gray-800 hover:text-secondary font-bold transform transition-all duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              {option.name}
            </Link>
          ))}
          <button className="bg-secondary text-white px-8 py-2 rounded-xl hover:opacity-80 font-bold transform transition-all duration-300 hover:scale-105">
            APPLY
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
