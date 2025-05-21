"use client";
import SectionTitle from "@/components/elements/SectionTitle";
import AppContext from "@/context/AppContext";
import { useContext } from "react";
import EducationTimeline from "./EducationTimeline";

const Resume = () => {
  const { sectionRefs } = useContext(AppContext);
  return (
    <section id="about" ref={sectionRefs.about} className="flex items-start pl-12 pr-6 pt-10">
      <div>
        <SectionTitle title={"Resume"} />
        <EducationTimeline />
      </div>
    </section>
  );
};

export default Resume;
