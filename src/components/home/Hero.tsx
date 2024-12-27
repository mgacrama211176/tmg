import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="h-fit lg:h-auto w-full bg-[#2d32595f] border border-transparent rounded-lg mt-32 overflow-hidden">
      <BackgroundGradient />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-[1440px] mx-auto h-[700px]">
        {/* Hero Text Content */}
        {/* <HeroContent /> */}

        {/* Hero Images */}
        {/* <HeroImages /> */}
      </div>
    </section>
  );
};

const BackgroundGradient = () => (
  <div className="absolute right-[50px] top-[40%] w-[600px] h-[672px] translate-y-[-50%] z-0">
    <div
      className="w-full h-full rounded-full blur-[100px] opacity-100"
      style={{
        background: "linear-gradient(133.13deg, #47BE26 40%, #1158DD 80%)",
        transform: "rotate(180deg)",
      }}
    />
  </div>
);

const HeroContent = () => (
  <div className="text-tertiary font-bold text-[40px] md:text-[60px] lg:text-[80px] leading-[1.1] lg:leading-[80px] ml-4 lg:ml-36 relative my-24 lg:mt-24">
    {/* Title Section */}
    <div className="relative">
      <div className="flex flex-col z-10">
        <h1 className="font-bold">Efficient</h1>
        <h1 className="font-bold ml-10 ">Ethical</h1>
        <h1 className="font-bold ml-20 ">Effective</h1>
      </div>
      <div className="absolute -left-8 -top-20 -z-10">
        <Image
          src="/check.svg"
          alt="check"
          width={300}
          height={0}
          className="w-[200px] md:w-[250px] lg:w-[300px]"
        />
      </div>
    </div>

    {/* Subtitle and CTA */}
    <div className="text-base font-normal mt-10">
      <p>Global staffing solutions for your business</p>
    </div>
    <div>
      <Link
        href="/"
        className="bg-secondary text-white px-10 py-4 rounded-lg mt-5 w-full lg:w-96 flex justify-center items-center hover:opacity-80 transition-all duration-300"
      >
        <span className="text-base font-normal">GET VIRTUAL ASSISTANT</span>
      </Link>
    </div>
  </div>
);

const HeroImages = () => (
  <div className="relative w-full lg:w-auto h-[500px] lg:h-auto items-end justify-center lg:justify-end hidden lg:flex">
    <div className="relative">
      {/* Main Agent Image */}
      <div className="relative z-20">
        <Image
          src="/G-Agent.png"
          alt="hero"
          width={730}
          height={700}
          loading="eager"
          quality={100}
          className="w-[350px] md:w-[500px] lg:w-[730px] object-contain"
        />
      </div>

      {/* Plane Path */}
      <div className="absolute right-0 lg:right-20 bottom-0 -z-10">
        <div className="relative">
          <Image
            src="/plane-path.svg"
            alt="plane path"
            width={700}
            height={700}
            className="w-[300px] md:w-[500px] lg:w-[700px] opacity-50"
          />
          {/* Plane */}
          <Image
            src="/plane.png"
            alt="plane path"
            width={40}
            height={50}
            className="absolute -right-4 lg:-right-10 bottom-[280px] lg:bottom-[380px] w-[30px] lg:w-[40px] opacity-50"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
