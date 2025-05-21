import SectionTitle from "@/components/elements/SectionTitle";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Intro",
    price: 29,
    features: [
      {
        text: "Interface Design",
        isAllow: true,
      },
      {
        text: "Front-end Code",
        isAllow: true,
      },
      {
        text: "Back-end Development",
        isAllow: true,
      },
      {
        text: "Search Engine Optimization",
        isAllow: false,
      },
      {
        text: "Awesome Support",
        isAllow: false,
      },
      {
        text: "Responsive site",
        isAllow: false,
      },
      {
        text: "Easy in use",
        isAllow: false,
      },
      {
        text: "Useful site",
        isAllow: false,
      },
      {
        text: "Speedy web",
        isAllow: false,
      },
    ],
  },
  {
    title: "Basic",
    price: 49,
    features: [
      {
        text: "Interface Design",
        isAllow: true,
      },
      {
        text: "Front-end Code",
        isAllow: true,
      },
      {
        text: "Back-end Development",
        isAllow: true,
      },
      {
        text: "Search Engine Optimization",
        isAllow: false,
      },
      {
        text: "Awesome Support",
        isAllow: false,
      },
      {
        text: "Responsive site",
        isAllow: false,
      },
      {
        text: "Easy in use",
        isAllow: false,
      },
      {
        text: "Useful site",
        isAllow: false,
      },
      {
        text: "Speedy web",
        isAllow: false,
      },
    ],
  },
  {
    title: "Popular",
    price: 99,
    features: [
      {
        text: "Interface Design",
        isAllow: true,
      },
      {
        text: "Front-end Code",
        isAllow: true,
      },
      {
        text: "Back-end Development",
        isAllow: true,
      },
      {
        text: "Search Engine Optimization",
        isAllow: false,
      },
      {
        text: "Awesome Support",
        isAllow: false,
      },
      {
        text: "Responsive site",
        isAllow: false,
      },
      {
        text: "Easy in use",
        isAllow: false,
      },
      {
        text: "Useful site",
        isAllow: false,
      },
      {
        text: "Speedy web",
        isAllow: false,
      },
    ],
  },
  {
    title: "Enterprise",
    price: 199,
    features: [
      {
        text: "Interface Design",
        isAllow: true,
      },
      {
        text: "Front-end Code",
        isAllow: true,
      },
      {
        text: "Back-end Development",
        isAllow: true,
      },
      {
        text: "Search Engine Optimization",
        isAllow: false,
      },
      {
        text: "Awesome Support",
        isAllow: false,
      },
      {
        text: "Responsive site",
        isAllow: false,
      },
      {
        text: "Easy in use",
        isAllow: false,
      },
      {
        text: "Useful site",
        isAllow: false,
      },
      {
        text: "Speedy web",
        isAllow: false,
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className=" px-4 py-7 lg:py-16 text-white">
       <SectionTitle title={"Pricing"} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 mt-5 lg:mt-10">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan}/>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
