"use client"
import AppContext from "@/context/AppContext";
import { useContext } from "react";
import SkillDetails from "./SkillDetails";
import WorkHistory from "./WorkHistory";

const Skills = () => {
  const { sectionRefs } = useContext(AppContext);
  return (
    <section
      id="profile"
      ref={sectionRefs.profile}
      className=" pl-12 pr-6"
    >
      <WorkHistory />
      <SkillDetails/>
    </section>
  );
};

export default Skills;
