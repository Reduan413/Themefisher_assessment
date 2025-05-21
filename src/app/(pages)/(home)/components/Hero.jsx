"use client";
import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import HeroBanner from "./HeroBanner";

const Hero = () => {
  const { sectionRefs } = useContext(AppContext);
  return (
    <section id="home" ref={sectionRefs.home} className="lg:h-screen px-0 pt-0 lg:pl-[10%] lg:pt-10">
      <HeroBanner/>
      <div className=" w-full lg:w-[63%] px-5 pt-10 lg:px-0 lg:pt-0">
        <h5 className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-base font-bold text-transparent lg:text-sm extraLg:text-base">
          INTRODUCTION
        </h5>
        <h2 className="mt-3 font-dmSans text-2xl font-bold !leading-[130%] text-[#ffffff] lg:text-3xl extraLg:text-4xl 2xl:text-5xl">
          I'm a Creative Developer & UI/UX Design Expert
        </h2>
        <p className="font-dmSans font-bold text-[#ffffff] lg:mt-3 lg:text-sm extraLg:mt-4 extraLg:text-base">
          24 years / Robert Smith / UK London
        </p>
        <p className="mt-4 font-dmSans text-xs font-medium text-[#C6C6C6] lg:mt-7 lg:text-sm extraLg:mt-8 extraLg:text-base 2xl:mt-9">
          Prolific, full stack web developer with a passion for metrics and beating former
          "best-yets. Prototyped 25 new product features per year for Flexor, Inc Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2020 Webby for Best Navigation and Structure.
        </p>

        <button className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] flex justify-center items-center rounded-full gap-3 py-3 px-6 font-dmSans font-bold text-[#ffffff] text-base mt-10">
          Download CV <FiDownload />
        </button>
      </div>
    </section>
  );
};

export default Hero;
