// components/EducationTimeline.jsx
import { RiGraduationCapLine } from "react-icons/ri";
import TimelineItem from "../../../../../components/elements/TimelineItem/TimelineItem";

const EducationTimeline = () => {
  return (
    <div className="py-10  text-white">
      <h2 className="flex items-center gap-3 font-dmSans text-2xl font-bold text-[#ffffff]">
        <span className="rounded-sm bg-[#333333] p-2">
          <RiGraduationCapLine className="text-[#F89222]" />
        </span>{" "}
        Education
      </h2>
      <div className="relative mt-8 flex flex-col gap-8 pt-8">
        <div className="absolute left-0 top-0 h-full w-2 rounded-full border-[2px] border-[#646464]"></div>
        <TimelineItem
          yearRange="2016–2020"
          title="Harvard University"
          subTitle="B.A. and M.S, Computer Science"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
        />
        <TimelineItem
          yearRange="2014–2016"
          title="Helwan University"
          subTitle="Bachelor Degree"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
        />
      </div>
    </div>
  );
};

export default EducationTimeline;
