"use client";
import { useState } from "react";
import Category from "./Category";
import MasonryGrid from "./MasonryGrid";
const portfolioData = [
  {
    id: "1",
    title: "Figma Mockup",
    description: "Figma mockup PSD available",
    category: "Graphic Design",
    src: "/placeholder.svg?height=321&width=332",
    height: 321,
  },
  {
    id: "2",
    title: "Shopping Bag",
    description: "Brand identity design",
    category: "Graphic Design",
    src: "/placeholder.svg?height=248&width=332",
    height: 248,
  },
  {
    id: "3",
    title: "Smart Watch",
    description: "Product design",
    category: "UI/UX Design",
    src: "/placeholder.svg?height=447&width=332",
    height: 447,
  },
  {
    id: "4",
    title: "Mobile App",
    description: "UI/UX design for mobile",
    category: "Mobile App",
    src: "/placeholder.svg?height=220&width=332",
    height: 220,
  },
  {
    id: "5",
    title: "Coffee Mug",
    description: "Product design",
    category: "Graphic Design",
    src: "/placeholder.svg?height=204&width=332",
    height: 204,
  },
  {
    id: "6",
    title: "Color Palette",
    description: "Brand identity design",
    category: "Graphic Design",
    src: "/placeholder.svg?height=220&width=332",
    height: 220,
  },
  {
    id: "7",
    title: "Website design",
    description: "Website design showcase",
    category: "Website design",
    src: "/placeholder.svg?height=200&width=300",
    height: 204,
  },
  {
    id: "8",
    title: "Photography",
    description: "Photography Project",
    category: "Photography",
    src: "/placeholder.svg?height=400&width=300",
    height: 204,
  },
];

// Get unique categories from data
const categories = ["All", ...Array.from(new Set(portfolioData.map((item) => item.category)))];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);
  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Portfolio</h1>

        {/* Category Navigation */}
        <Category
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Masonry Grid Layout */}
        <MasonryGrid filteredItems={filteredItems}/>
      </div>
    </div>
  );
};
export default Portfolio;
