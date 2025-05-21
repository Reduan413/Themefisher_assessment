// components/ProgressBar.jsx
const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="">
      <div className="mb-1 flex justify-between">
        <span className="font-dmSans text-2xl font-medium text-[#E3E3E3]">{skill?.name}</span>
        <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-xl font-medium text-transparent">
          {skill?.level}%
        </span>
      </div>
      <div className="h-4 mt-2 w-full rounded-full bg-gradient-to-r from-[#f5bd4d48] to-[#f8912248]">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] transition-all duration-700"
          style={{ width: `${skill?.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
