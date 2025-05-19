import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const anjelScript = localFont({
  src: [
    {
      path: "./Anjel_Script.ttf",
      weight: "400",
    },
  ],
  variable: "--font-anjelScript",
});
const felixTitlin = localFont({
  src: [
    {
      path: "./felixtitlin.ttf",
      weight: "400",
    },
  ],
  variable: "--font-felixTitlin",
});

// provide you all fonts, make sure to add variable properly and add that on tailwindcss.config. to use on  tailwindcss.config.js: inter: 'var(--font-inter)', (line no: 12)
const fontList = [dmSans, anjelScript, felixTitlin];

export const fontVariables = fontList.map((font) => font.variable).join(" ");
