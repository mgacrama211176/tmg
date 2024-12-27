import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Navigation = (props: Props) => {
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
      href: "/contact",
    },
  ];
  return (
    <nav className="bg-primary/10 fixed top-5 z-50 w-full px-5">
      <div className="flex items-center justify-between h-24 bg-tertiary border border-transparent rounded-lg px-14">
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Task Masters Logo"
            width={150}
            height={60}
            loading="eager"
            className="object-contain"
            priority
            quality={100}
          />
        </div>

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
    </nav>
  );
};

export default Navigation;
