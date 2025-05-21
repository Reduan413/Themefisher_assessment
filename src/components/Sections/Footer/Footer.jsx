"use client";

import FooterButton from "./FooterButton";

const Footer = ({}) => {
  return (
    <div>
      {/* mobile navbar */}
      <div className="relative flex flex-col gap-4 py-4 lg:hidden">
        <div
          className="absolute bottom-0 right-0 -z-10 h-full w-[80%] bg-[#121414]"
          style={{
            clipPath: "polygon(22% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
        ></div>

        <p className="origin-center whitespace-nowrap text-center font-sans text-sm font-normal text-[#A5A5A5]">
          © design by themefisher developed by gethugothemes
        </p>

        <div className="flex items-center justify-center gap-3">
          <FooterButton text={"Fr"} />
          <FooterButton text={"En"} />
        </div>
      </div>
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
            <FooterButton text={"Fr"} />
            <FooterButton text={"En"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
