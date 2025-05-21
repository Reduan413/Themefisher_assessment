import { cn } from "@/lib/utils";

const Category = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-6 border-b border-gray-800 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "whitespace-nowrap px-1 pb-2 text-sm",
              activeCategory === category
                ? "border-b-2 border-white text-white"
                : "text-gray-400 hover:text-gray-200",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
