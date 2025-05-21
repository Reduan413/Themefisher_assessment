"use client";
import SectionTitle from "@/components/elements/SectionTitle";
import AppContext from "@/context/AppContext";
import { portfolioData } from "@/data/portfolioData";
import { useContext, useState } from "react";
import Category from "./Category";
import MasonryGrid from "./MasonryGrid";


// Get unique categories from data
const categories = ["All", ...Array.from(new Set(portfolioData.map((item) => item.category)))];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { sectionRefs } = useContext(AppContext);

  const filteredItems =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);
  return (
    <section id="skill" ref={sectionRefs.skill} className=" px-6 py-10">
      <SectionTitle title={"Portfolio"} />

        {/* Category Navigation */}
        <Category
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Masonry Grid Layout */}
        <MasonryGrid filteredItems={filteredItems}/>
      </section>
  );
};
export default Portfolio;
