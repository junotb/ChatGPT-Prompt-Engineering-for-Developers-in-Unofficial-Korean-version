"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Navigator from '@/components/Navigator';
import Openai from "@/components/Openai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Template = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();
  const [mobileMode, setMobileMode] = useState(false);
  const [navigatorUI, setNavigatorUI] = useState(true);
  const [openaiUI, setOpenaiUI] = useState(true);
  const [dialogUI, setDialogUI] = useState(true);
  const handleNavigatorUI = () => {
    setNavigatorUI(!navigatorUI);
  };
  const handleOpenaiUI = () => {
    setOpenaiUI(true);
    setDialogUI(false);
  };
  const handleDialogUI = () => {
    setOpenaiUI(false);
    setDialogUI(true);
  };

  useEffect(() => {
    const initModeUI = (matches: boolean) => {
      if (matches) {
        setMobileMode(false);
        setNavigatorUI(true);
        setOpenaiUI(true);
        setDialogUI(true);
      } else {
        setMobileMode(true);
        setNavigatorUI(false);
        setOpenaiUI(false);
        setDialogUI(true);
      }
    };
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.onchange = (e) => {
      initModeUI(e.matches);
    };
    initModeUI(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (mobileMode) {
      setNavigatorUI(false);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <main className="flex flex-col min-h-0 h-full md:flex-row overflw-y-auto">
        {
          navigatorUI &&
          <Navigator/>
        }
        {
          (pathname === '/') ? '' : (            
            openaiUI &&
            <Openai />
          )
        }
        {
          dialogUI &&
          <div className="w-full h-full p-4 overflow-y-auto">{children}</div>
        }
      </main>
      {
        mobileMode &&
        <Footer
          navigatorUI={navigatorUI}
          handleNavigatorUI={handleNavigatorUI}
          openaiUI={openaiUI}
          handleOpenaiUI={handleOpenaiUI}
          dialogUI={dialogUI}
          handleDialogUI={handleDialogUI}
        />
      }
    </div>
  )
};

export default Template;