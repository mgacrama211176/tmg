import React from "react";
import Image from "next/image";
import { CardDetails } from "./contants";

type Props = {};

const WhatWedo = (props: Props) => {
  return (
    <section className="relative w-full h-full flex flex-col my-32 ">
      {/* path BG */}
      <div className="relative">
        <Image
          src="/Vector_2.svg"
          alt="path"
          width={1920}
          height={0}
          className="absolute -z-10"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <Image src="/whatWeDo.svg" alt="what we do" width={700} height={0} />
        </div>
        <div className="flex flex-wrap justify-center items-center w-1/2 gap-10 mt-10 ">
          {CardDetails.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index >= 6
                  ? "md:col-span-[1.5] first:md:col-start-1 last:md:col-end-4"
                  : ""
              }`}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={50}
                height={0}
                className="mb-2"
              />
              <h3 className="text-center text-xl font-black text-secondary">
                {card.title}
              </h3>
              <p className="text-center text-tertiary font-bold w-48 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWedo;
