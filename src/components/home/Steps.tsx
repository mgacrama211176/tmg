import React from "react";
import Image from "next/image";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit lg:h-auto w-full border border-transparent rounded-lg mt-32 overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-[1440px] mx-auto">
        <Image
          src="/4 Steps to meet your VA.svg"
          alt="plane"
          width={700}
          height={200}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-fit lg:h-auto w-full border border-transparent rounded-lg mt-32 overflow-hidden">
        {/* Icon Paths */}
        <div className="relative flex flex-col items-center justify-center gap-40">
          <Image
            src="/fourSteps/phoneIcon.svg"
            alt="phoneIcon"
            width={50}
            height={0}
          />
          <Image
            src="/fourSteps/listIcon.svg"
            alt="listIcon"
            width={50}
            height={0}
          />
          <Image
            src="/fourSteps/peopleIcon.svg"
            alt="peopleIcon"
            width={50}
            height={0}
          />
          <Image
            src="/fourSteps/handShake.svg"
            alt="handShake"
            width={50}
            height={0}
          />
          <Image
            src="/fourSteps/Line 1.svg"
            alt="line"
            width={1.2}
            height={0}
            className="absolute -bottom-10 -z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
