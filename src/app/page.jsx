"use client";

import AppContext from "@/context/AppContext";
import { useContext } from "react";
import Hero from "./(pages)/(home)/components/Hero";
import Portfolio from "./(pages)/(home)/components/Portfolio/Portfolio";
import PricingSection from "./(pages)/(home)/components/PricingSection/PricingSection";
import Resume from "./(pages)/(home)/components/Resume/Resume";
import Skills from "./(pages)/(home)/components/Skills/Skills";
import Contact from "./(pages)/Contact/Contact";

const Page = () => {
  const { sectionRefs } = useContext(AppContext);
  return (
    <div className="relative grid grid-cols-1 pt-[100px] lg:h-screen lg:grid-cols-[34%_66%] lg:px-[4.375rem] lg:pt-[76px] extraLg:px-20 2xl:px-[5.75rem]">
      {/* <HeroBanner /> */}
      <div className="relative h-full w-full">
        {/* <div className="lg:hidden block">
          <HeroBanner />
        </div> */}
      </div>
      <div className="h-full w-full">
        <Hero />
        <Resume />
        <Skills />
        <Portfolio />
        <PricingSection />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
