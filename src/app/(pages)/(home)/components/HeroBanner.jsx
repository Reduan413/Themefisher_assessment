import Icons from "@/components/elements/Icons/Icons";
import Image from "next/image";
const HeroBanner = () => {
  return (
    <div className=" static lg:fixed z-30 grid lg:h-screen w-full lg:w-[35.5%] lg:grid-rows-[90%_10%] bg-[#000000] lg:pl-[4.375rem] lg:pt-[76px] extraLg:pl-20 2xl:pl-[5.75rem] top-0 left-0">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 h-[4%] w-full bg-gradient-to-t from-[#d9d9d95d] to-transparent"></div>
        <Image src="https://i.postimg.cc/W3WgFPn1/Mask-group-2.png" alt="" className="h-full w-full object-cover" width={500} height={500} />
      </div>
      <div className="h-full w-full py-5 lg:py-0">
        <Icons />
      </div>
    </div>
  );
};
export default HeroBanner;
