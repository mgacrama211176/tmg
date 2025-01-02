import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
import Image from "next/image";
import Link from "next/link";
import WhatWedo from "@/components/home/WhatWedo";
import ContactUs from "@/components/contactUs/ContactUs";
import ApplicantForm from "@/components/applicantsForm/ApplicantForm";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main className="relative flex flex-col items-center justify-center px-5 w-full">
        {/* Hero */}
        <Hero />

        {/* What We do! */}
        <WhatWedo />

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
