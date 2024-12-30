"use client";
import React, { useState } from "react";
import Image from "next/image";
import { conpanyData } from "./constants";
import axios from "axios";

type Props = {};

const ContactUs = (props: Props) => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    await axios
      .post("/api/contact", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsSent(false);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto bg-white pb-20"
      id="contact"
    >
      <div className="text-white text-4xl font-bold w-full ">
        <Image
          src="/fourSteps/handShake.svg"
          alt="Clound"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full h-auto px-2 md:px-20">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap w-full gap-10 md:gap-16J">
          <div className="my-4 w-96 flex flex-col items-center">
            <h1 className="text-black text-5xl md:text-5xl lg:text-6xl font-black uppercase mb-16 text-center md:text-left">
              Contact Us
            </h1>
            <form
              className="flex flex-col items-start justify-center gap-3 w-full lg:w-96"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                placeholder="Name"
                className="border rounded-xl p-2 bg-primary text-white w-full"
                name="name"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded-xl p-2 bg-primary text-white w-full"
                name="email"
                onChange={(e) => handleOnChange(e)}
              />
              <textarea
                placeholder="Message"
                className="border rounded-xl p-2 bg-primary text-white w-full h-40"
                name="message"
                onChange={(e) => handleOnChange(e)}
              />
              <button
                type="submit"
                className="bg-secondary text-white p-2 rounded-xl w-1/3 uppercase mx-auto"
              >
                {isSent ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
          <div className="">
            <div className="w-40 h-full mx-auto md:mx-0">
              <Image
                src="/Logo.svg"
                alt="Clound"
                width={1020}
                height={0}
                loading="eager"
              />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center w-full gap-4 mt-4">
              {conpanyData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={item.icon} alt="Clound" width={20} height={20} />
                  <p className="text-black font-bold">{item.data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
