// components/TimelineItem.jsx
const TimelineItem = ({ yearRange, title, subTitle, description }) => {
  return (
    <div className="relative pl-8">
      <div className="absolute -left-1 top-1 z-20 h-4 w-4 rotate-45 border-[2px] border-[#646464] rounded-sm"></div>
      <p className="w-fit rounded-md border-[1px] border-[#ffffff33] p-2 font-dmSans text-sm font-bold text-[#ffffff]">
        {yearRange}
      </p>
      <div className="mt-3 rounded-lg border-[1px] border-[#ffffff33] bg-[#121414] p-5">
        <h3 className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-lg font-bold text-transparent">
          {title}
        </h3>

        <p className="mt-1 font-dmSans text-xs font-normal text-[#8F8F8F]">{subTitle}</p>
        <hr className="my-4 bg-[#222222]" />
        <p className="font-dmSans font-normal text-base text-[#ffffff]">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
