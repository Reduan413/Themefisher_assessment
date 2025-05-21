"use client";
import { navLinks } from "@/constants/navLinks";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";

const Navbar = ({}) => {
  const sidebarRef = useRef(null);
  const { sectionRefs, showNavbar, setShowNavbar } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState("");


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

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //       setShowNavbar(false);
  //     }
  //   };

  //   if (showNavbar) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showNavbar]);
  return (
    <>
      <div>
        {/* mobile navbar */}

        <div
          ref={sidebarRef}
          className={`fixed left-0 top-0 z-20 grid h-screen w-[4.375rem] items-center justify-center bg-[#171B1A] transition-transform duration-500 ease-in-out lg:hidden extraLg:w-20 2xl:w-[5.75rem] ${showNavbar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div
            className="absolute bottom-0 left-0 h-[60%] w-full bg-[#121414]"
            style={{
              clipPath: "polygon(0 0, 99% 17%, 100% 100%, 0% 100%)",
            }}
          ></div>
          {/* Menu Items */}
          <div className="grid h-fit w-full grid-cols-1 items-center justify-between gap-10 text-center text-[#4B3E48] lg:gap-7 extraLg:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                onClick={()=>setShowNavbar(!showNavbar)}
                className={`transform ${
                  activeLink === link.title.toLowerCase() ? "text-[#F89222]" : "text-[#646464]"
                } text-3xl hover:text-[#F89222] lg:text-xl extraLg:text-2xl 2xl:text-3xl`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* web navbar */}
        <div className="fixed left-0 top-0 z-40 hidden h-screen w-[4.375rem] items-center justify-center bg-[#171B1A] lg:grid extraLg:w-20 2xl:w-[5.75rem]">
          <div
            className="absolute bottom-0 left-0 h-[60%] w-full bg-[#121414]"
            style={{
              clipPath: "polygon(0 0, 99% 17%, 100% 100%, 0% 100%)",
            }}
          ></div>
          {/* Menu Items */}
          <div className="grid h-fit w-full grid-cols-1 items-center justify-between gap-10 text-center text-[#4B3E48] lg:gap-7 extraLg:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className={`transform ${
                  activeLink === link.title.toLowerCase() ? "text-[#F89222]" : "text-[#646464]"
                } text-3xl hover:text-[#F89222] lg:text-xl extraLg:text-2xl 2xl:text-3xl`}
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
