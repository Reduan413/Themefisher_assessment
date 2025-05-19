import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 grid w-full grid-cols-[34%_66%] items-center justify-between bg-[#121414] lg:px-[4.375rem] extraLg:px-20 2xl:px-[5.75rem]">
      <div className="py-5 lg:py-3 extraLg:py-4 2xl:py-5">
        <div>
          <h4 className="font-dmSans text-3xl lg:text-xl extraLg:text-2xl 2xl:text-xl font-bold text-white">
            Daryl{" "}
            <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
              Smith
            </span>
          </h4>
          <p className="font-dmSans mt-1 text-lg lg:text-sm extraLg:text-base 2xl:text-lg font-medium text-[#C2C2C2]">UI/UX designer</p>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-between border-l border-[#353535]">
        <div className="flex items-center justify-start gap-4 lg:gap-2 extraLg:gap-3 2xl:gap-4 ml-10">
          <div className="rounded-md bg-gradient-to-r from-[#F5BD4D] to-[#F89222] lg:p-2 2xl:p-3 lg:text-base 2xl:text-lg text-white">
            <IoHomeOutline />
          </div>
          <p className="font-dmSans text-2xl lg:text-base extraLg:text-xl 2xl:text-2xl font-bold text-white">Home</p>
        </div>
        <div>
          <Link href={""} className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-[1px] w-fit h-fit my-auto block rounded-full">
            <div className="rounded-full bg-black px-6 py-3 lg:py-2 2xl:py-3">
              <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent text-base lg:text-sm 2xl:text-base font-bold font-dmSans" >
                Talk To Me
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
