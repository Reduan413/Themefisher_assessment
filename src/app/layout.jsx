import Footer from "@/components/Sections/Footer/Footer";
import Header from "@/components/Sections/Header/Header";
import Navbar from "@/components/Sections/Navbar/Navbar";
import { AppContextProvider } from "@/context/AppContext";
import { fontVariables } from "@/fonts/index";
import { Env } from "@/utils/env";
import "./globals.css";
import RootWrapper from "./root-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontVariables} bg-[#171B1A]`}>
        <RootWrapper>
          <AppContextProvider>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </AppContextProvider>
        </RootWrapper>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Themefisher_assessment ",
    template: "%s | Themefisher_assessment",
  },
  description: "Starter Templates",
  openGraph: {
    url: Env.site_url,
    images: [{ url: `${Env.site_url}og.jpg`, alt: "Next Starter" }],
  },
};
