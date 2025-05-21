// components/EducationTimeline.jsx
import { CgFileDocument } from "react-icons/cg";
import TimelineItem from "../../../../../components/elements/TimelineItem/TimelineItem";

const WorkHistory = () => {
  return (
    <div className="py-10 text-white">
      <h2 className="flex items-center gap-3 font-dmSans text-2xl font-bold text-[#ffffff]">
        <span className="rounded-sm bg-[#333333] p-2">
          <CgFileDocument className="text-[#F89222]" />
        </span>{" "}
        Work History
      </h2>
      <div className="relative mt-8 flex flex-col gap-8 pt-8">
        <div className="absolute left-0 top-0 h-full w-2 rounded-full border-[2px] border-[#646464]"></div>
        <TimelineItem
          yearRange="2016-2022"
          title="UI/UX design"
          subTitle="Web site design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
        />
        <TimelineItem
          yearRange="2012-2016"
          title="Junior Web  designers"
          subTitle="Product designer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas."
        />
      </div>
    </div>
  );
};

export default WorkHistory;
