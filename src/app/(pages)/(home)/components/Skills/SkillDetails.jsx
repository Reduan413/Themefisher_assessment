import SectionTitle from "@/components/elements/SectionTitle";
import ProgressBar from "./ProgressBar";

const SkillDetails = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Photography", level: 90 },
    { name: "Creativity", level: 80 },
    { name: "Team Work", level: 95 },
    { name: "Web Design", level: 95 },
  ];
  return (
    <div className="mx-auto rounded-lg pt-8 text-white">
      <SectionTitle title={"Skills"} />
      <div className="mt-8 flex flex-col gap-8">
        {skills.map((skill, index) => (
          <ProgressBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
export default SkillDetails;
