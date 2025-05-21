"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const MasonryGrid = ({ filteredItems }) => {
  const mid = Math.floor(filteredItems.length / 2);
  console.log("mid", mid);
  const column1 = filteredItems.slice(0, mid);
  const column2 = filteredItems.slice(mid);

  return (
    <div className="grid grid-cols-2 gap-4">
      {[column1, column2].map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2">
          {column.map((item, index) => (
            <div key={item.id} className="group relative overflow-hidden rounded-md bg-gray-900">
              <div className="relative h-full">
                <Image
                  src={item?.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#000000ab] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Link
                      href={"#"}
                      className="absolute right-5 top-5 rounded-full bg-[#000000] p-1"
                      style={{
                        boxShadow: "0px 0px 6px 6px #FFFFFF0D",
                      }}
                    >
                      <FaLink />
                    </Link>
                    <div className="p-4 text-center">
                      <h3 className="text-base font-bold text-[#ffffff] lg:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 font-dmSans text-sm font-normal text-[#AFAFAF] lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
