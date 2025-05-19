"use client";
import SmNavbarBg from "@/assets/image/sm_navbar_bg.png";
import { navLinks } from "@/constants/navLinks";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = ({}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const sidebarRef = useRef(null);
  const { sectionRefs } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState("");
  console.log(activeLink);

  useEffect(() => {
    // Create the IntersectionObserver once
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the section ID and set it as active link
            const sectionId = entry.target.id;
            setActiveLink(sectionId);

            // Special handling for home section which might be at the very top
            if (window.scrollY < 100 && sectionId === "home") {
              setActiveLink("home");
            }
          }
        });
      },
      {
        root: null, // Viewport
        threshold: 0.6, // Trigger when 60% of the section is visible
        rootMargin: "-10% 0px -10% 0px", // Add some margin to improve detection
      },
    );

    // Observe each section using the refs passed from the page
    if (sectionRefs) {
      Object.keys(sectionRefs).forEach((key) => {
        const sectionRef = sectionRefs[key];
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      });
    }

    // Add a scroll event listener to handle the top of the page (home section)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for home section
    handleScroll();

    // Clean up the observer and event listener when component unmounts
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    if (showNavbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNavbar]);
  return (
    <>
      <div>
        {/* mobile navbar */}
        <div className="fixed right-0 z-50 h-20 w-20 lg:hidden">
          <div
            className="flex h-full w-full items-center justify-end pr-5"
            style={{
              backgroundImage: `url(${SmNavbarBg.src})`,
              backgroundOpacity: 0.5, // Note: This doesn't work; opacity needs to be handled differently
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CgMenuLeft
              onClick={() => setShowNavbar(!showNavbar)}
              className="rotate-180 text-3xl text-black"
            />
          </div>
          <div
            ref={sidebarRef}
            className={`glass-sidebar absolute right-0 top-0 z-40 grid h-screen w-[105px] transform grid-rows-[15%_50%_35%] items-start py-8 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-x-0" : "translate-x-full"}`}
          >


            {/* Menu Items */}
            <div className="grid h-full w-full grid-cols-1 items-center justify-between text-center font-mada text-base font-medium uppercase text-[#4B3E48] lg:text-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="flex rotate-90 transform items-center justify-center hover:text-black"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {link.title}
                </Link>
              ))}
            </div>


          </div>
        </div>
        {/* web navbar */}
        <div className="fixed left-0 top-0 z-40 hidden h-screen items-center justify-center bg-[#171B1A] lg:grid w-[4.375rem] extraLg:w-20 2xl:w-[5.75rem]">
          <div className=" absolute w-full h-[60%] bg-[#121414] left-0 bottom-0"
          style={{
            clipPath: "polygon(0 0, 99% 17%, 100% 100%, 0% 100%)"
           }}>

          </div>
          {/* Menu Items */}
          <div className="grid h-fit w-full grid-cols-1 items-center justify-between text-center  text-[#4B3E48] gap-10 lg:gap-7 extraLg:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className={`transform ${
                  activeLink === link.title.toLowerCase() ? "text-[#F89222]" : "text-[#646464]"
                } hover:text-[#F89222] text-3xl lg:text-xl extraLg:text-2xl 2xl:text-3xl`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
