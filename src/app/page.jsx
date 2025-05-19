"use client";
import UsrImg from "@/assets/image/user_img.png";
import Icons from "@/components/elements/Icons/Icons";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";
import Hero from "./(pages)/(home)/components/Hero";

const Page = () => {
  const { sectionRefs } = useContext(AppContext);
  return (
    <div className="relative grid h-screen grid-cols-[34%_66%] lg:px-[4.375rem] lg:pt-[76px] extraLg:px-20 2xl:px-[5.75rem]">
      <div className="fixed z-30 grid h-screen w-[35.5%] grid-rows-[90%_10%] bg-[#000000] lg:pl-[4.375rem] lg:pt-[76px] extraLg:pl-20 2xl:pl-[5.75rem]">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 h-[4%] w-full bg-gradient-to-t from-[#d9d9d95d] to-transparent"></div>
          <Image src={UsrImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-full w-full">
          <Icons />
        </div>
      </div>
      <div className="relative h-full w-full"></div>
      <div className="h-full w-full">
        <Hero/>
        <section
          id="about"
          ref={sectionRefs.about}
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl">About Section</h1>
        </section>

        <section
          id="profile"
          ref={sectionRefs.profile}
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl">Profile Section</h1>
        </section>

        <section
          id="skill"
          ref={sectionRefs.skill}
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl">Skill Section</h1>
        </section>

        <section
          id="contact"
          ref={sectionRefs.contact}
          className="flex h-screen items-center justify-center"
        >
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      </div>
    </div>
  );
};

export default Page;
