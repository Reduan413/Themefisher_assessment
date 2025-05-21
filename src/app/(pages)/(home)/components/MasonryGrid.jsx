// components/MasonryGrid.js
import imagesLoaded from "imagesloaded";
import { useEffect, useRef } from "react";

const images = [
  { id: "1", src: "/placeholder.svg", alt: "Image 01" },
  { id: "2", src: "https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg", alt: "Image 02" },
  { id: "3", src: "https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg", alt: "Image 03" },
  { id: "4", src: "https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg", alt: "Image 04" },
  { id: "5", src: "https://cruip-tutorials.vercel.app/masonry/masonry-05.jpg", alt: "Image 05" },
  { id: "6", src: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg", alt: "Image 06" },
  { id: "7", src: "https://cruip-tutorials.vercel.app/masonry/masonry-07.jpg", alt: "Image 07" },
  { id: "8", src: "https://cruip-tutorials.vercel.app/masonry/masonry-08.jpg", alt: "Image 08" },
  { id: "9", src: "https://cruip-tutorials.vercel.app/masonry/masonry-09.jpg", alt: "Image 09" },
  { id: "10", src: "https://cruip-tutorials.vercel.app/masonry/masonry-10.jpg", alt: "Image 10" },
];

export default function MasonryGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    function resizeGridItem(item) {
      const grid = gridRef.current;
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
      const content = item.querySelector(".content");
      const rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    }

    function resizeAllGridItems() {
      const allItems = gridRef.current.querySelectorAll(".item");
      allItems.forEach(item => resizeGridItem(item));
    }

    // Trigger once images load
    const imgLoad = imagesLoaded(gridRef.current);
    imgLoad.on("progress", function (instance, image) {
      resizeGridItem(image.img.closest(".item"));
    });

    resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid auto-rows-[10px] grid-cols-1 md:grid-cols-2 gap-4"
      style={{ display: "grid", gridAutoRows: "10px", gridGap: "1rem" }}
    >
      {images.map((img) => (
        <div key={img.id} className="item overflow-hidden rounded-xl shadow bg-white">
          <div className="content">
            <img src={img.src} alt={img.alt} className="w-full rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
