"use client";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import { useContext } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  const { showNavbar, setShowNavbar, showNavbarToggle } = useContext(AppContext);
  return (
    <div className="fixed left-0 top-0 z-50 grid w-full grid-cols-1 items-center justify-between bg-[#121414] lg:grid-cols-[34%_66%] lg:px-[4.375rem] extraLg:px-20 2xl:px-[5.75rem]">
      <div className="order-2 hidden py-5 lg:order-1 lg:block lg:py-3 extraLg:py-4 2xl:py-5">
        <div className="">
          <h4 className="font-dmSans text-3xl font-bold text-white lg:text-xl extraLg:text-2xl 2xl:text-3xl">
            Daryl{" "}
            <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
              Smith
            </span>
          </h4>
          <p className="mt-1 font-dmSans text-lg font-medium text-[#C2C2C2] lg:text-sm extraLg:text-base 2xl:text-lg">
            UI/UX designer
          </p>
        </div>
      </div>
      <div className="order-1 flex h-full w-full items-center justify-between border-[#353535] px-3 py-4 lg:order-2 lg:border-l lg:px-0 lg:py-0">
        <div className="hidden items-center justify-start gap-4 lg:ml-10 lg:flex lg:gap-2 extraLg:gap-3 2xl:gap-4">
          <div className="rounded-md bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-1 text-base text-white lg:p-2 2xl:p-3 2xl:text-lg">
            <IoHomeOutline />
          </div>
          <p className="font-dmSans text-2xl font-bold text-white lg:text-base extraLg:text-xl 2xl:text-2xl">
            Home
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 lg:hidden">
          <div
            className="z-40 h-fit w-fit rounded-md bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-2 text-2xl text-white"
            onClick={() => showNavbarToggle()}
          >
            <CgMenuLeft />
          </div>
          <div>
            <h4 className="font-dmSans text-3xl font-bold text-white lg:text-xl extraLg:text-2xl 2xl:text-3xl">
              Daryl{" "}
              <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
                Smith
              </span>
            </h4>
            <p className="mt-1 font-dmSans text-lg font-medium text-[#C2C2C2] lg:text-sm extraLg:text-base 2xl:text-lg">
              UI/UX designer
            </p>
          </div>
        </div>
        <div>
          <Link
            href={""}
            className="my-auto block h-fit w-fit rounded-full bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-[1px]"
          >
            <div className="rounded-full bg-black px-6 py-3 lg:py-2 2xl:py-3">
              <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-base font-bold text-transparent lg:text-sm 2xl:text-base">
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
