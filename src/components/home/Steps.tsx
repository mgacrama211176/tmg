import React from "react";
import Image from "next/image";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-fit lg:h-auto w-full border border-transparent rounded-lg mt-32 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-[1440px] mx-auto">
        <Image
          src="/4 Steps to meet your VA.svg"
          alt="plane"
          width={783}
          height={200}
        />
      </div>
    </div>
  );
};

export default Steps;
