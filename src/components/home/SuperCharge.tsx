import React from "react";
import Image from "next/image";

type Props = {};

const SuperCharge = (props: Props) => {
  const superChargeCards = [
    {
      title: "CUSTOMER SERVICE",
      description:
        "Managing inbound and outbound customer calls, addressing inquiries, and providing assistance or information. Exceptional English Speaking Candidates.",
      image: "/superCharge/Customer Service.png",
      text: "text-right",
      reverse: false,
    },
    {
      title: "Logistics Operations",
      description:
        "Monitor shipments in real-time, providing updates on the location and status of goods to ensure on-time delivery and transparency throughout the shipping process.",
      image: "/superCharge/Logistics.png",
      text: "text-left",
      reverse: true,
    },
    {
      title: "SALES",
      description:
        "Our virtual assistants specialize in identifying and qualifying potential leads, utilizing various strategies such as market research, cold calling, and email outreach to fill your sales pipeline with promising opportunities.",
      image: "/superCharge/Sales.png",
      text: "text-right",
      reverse: false,
    },
    {
      title: "ACCOUNTING",
      description:
        "Create, send, and manage invoices to ensure timely payments.",
      image: "/superCharge/Accounting.png",
      text: "text-left",
      reverse: true,
    },
    {
      title: "Admin Support",
      description:
        "Scheduling and organizing meetings, appointments, and events, ensuring there are no conflicts and reminders are set. ",
      image: "/superCharge/Admin.png",
      text: "text-right",
      reverse: false,
    },
  ];
  return (
    <div className="relative w-full h-auto flex flex-col my-32 items-center justify-center ">
      <div>
        <Image
          src="/superCharge/superChargeHeader.svg"
          alt="superCharge"
          width={1000}
          height={0}
        />
      </div>
      {/* Cards Container */}
      <div className="flex flex-col gap-6 justify-center items-center max-w-[1000px] mt-10 text-tertiary">
        {superChargeCards.map((cards, index) => (
          <div
            className={`flex ${cards.reverse ? "flex-row-reverse" : "flex-row"} gap-6`}
            key={index}
          >
            <div
              className={`${cards.text} flex flex-col gap-4 justify-center w-[700px]`}
            >
              <h1 className="text-4xl font-bold uppercase">{cards.title}</h1>
              <p>{cards.description}</p>
            </div>
            <div className="w-full">
              <Image
                src={cards.image}
                alt="superCharge"
                width={1300}
                height={1000}
                quality={100}
                className="rounded-lg w-[800px]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperCharge;
