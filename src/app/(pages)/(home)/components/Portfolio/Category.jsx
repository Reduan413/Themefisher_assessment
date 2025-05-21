import { cn } from "@/lib/utils";

const Category = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div
      className="mb-8 mt-10 overflow-x-auto rounded-md bg-[#000000]"
      style={{
        boxShadow: "0px 0px 25px 10px #FFFFFF0F",
      }}
    >
      <div className="flex gap-5 rounded-md  px-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "relative whitespace-nowrap p-5 text-base",
              activeCategory === category
                ? "bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent"
                : "text-gray-400 hover:text-gray-200",
            )}
          >
            <span
              className={cn(
                activeCategory === category ? "w-full" : "w-0",
                "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F5BD4D] to-[#F89222]",
              )}
            ></span>

            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
