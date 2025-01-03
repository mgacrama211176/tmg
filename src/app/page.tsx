import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
import Image from "next/image";
import Link from "next/link";
import WhatWedo from "@/components/home/WhatWedo";
import ContactUs from "@/components/contactUs/ContactUs";
import ApplicantForm from "@/components/applicantsForm/ApplicantForm";
import SuperCharge from "@/components/home/SuperCharge";

export default function Home() {
  return (
    <div className="relative overflow-hidden antialiased">
      <Navigation />
      <main className="relative flex flex-col items-center justify-center px-5 w-full">
        {/* Hero */}
        <Hero />

        {/* What We do! */}
        <WhatWedo />

        {/* Super Charge */}
        <SuperCharge />

        {/* Steps */}
        <Steps />

        {/* Contact Us */}
      </main>
      <ContactUs />

      {/* Applicant Form */}
      <ApplicantForm />
    </div>
  );
}
