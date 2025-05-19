"use client";

const Footer = ({}) => {
  return (
    <div>
      {/* web navbar */}
      <div className="fixed right-0 top-0 z-30 hidden h-screen w-[4.375rem] items-center justify-center bg-[#171B1A] lg:grid extraLg:w-20 2xl:w-[5.75rem]">
        <div
          className="absolute bottom-0 left-0 h-[60%] w-full bg-[#121414]"
          style={{
            clipPath: "polygon(0 17%, 100% 0, 99% 100%, 0 100%)",
          }}
        ></div>
        <div className="z-50 flex h-full flex-col items-center justify-between py-8">
          <div></div> {/* Empty div for spacing */}
          <div>
            <p className="origin-center rotate-90 whitespace-nowrap font-sans text-sm font-normal text-[#A5A5A5]">
              © design by themefisher developed by gethugothemes
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button className="flex items-center justify-center rounded-full bg-[#1D2221] font-dmSans text-xs font-normal text-[#ffffff] transition-colors hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] hover:text-white lg:h-8 lg:w-8 extraLg:h-10 extraLg:w-10">
              Fr
            </button>
            <button className="flex items-center justify-center rounded-full bg-[#1D2221] font-dmSans text-xs font-normal text-white transition-colors hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222] lg:h-8 lg:w-8 extraLg:h-10 extraLg:w-10">
              En
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
