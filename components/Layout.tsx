import { ReactNode, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import MainHeader from "./mainHeader";
import NormalHeader from "./normalHeader";
import MobileHeader from "./mobileHeader";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { isMobile } from "react-device-detect";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [userData, setUserData]: any = useState();
  const [winWid, setWinWIdth] = useState<number | undefined>();
  let header;
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        console.log(user);
      } else {
        setUserData(null);
        console.log("no - user");
      }
    });

    let windowSize: number = window.innerWidth;
    setWinWIdth(windowSize);
    console.log(winWid);

    const handleResize = () => {
      windowSize = window.innerWidth;
      setWinWIdth(windowSize);
      console.log(winWid);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, []);

  console.log(winWid);

  if (isMobile === false) {
    if (winWid !== undefined && winWid > 1200) {
      if (router.pathname.startsWith("/")) {
        header = <MainHeader userData={userData} />;
        if (
          router.pathname === "/items/[...params]" ||
          router.pathname.startsWith("/auth") ||
          router.pathname.startsWith("/mypage")
        ) {
          header = <NormalHeader userData={userData} />;
        }
      }
    } else if (winWid !== undefined && winWid < 1200) {
      header = <MobileHeader userData={userData} />;
    }
  } else if (isMobile === true) {
    if (winWid !== undefined && winWid < 1200) {
      header = <MobileHeader userData={userData} />;
    }
  }
  return (
    <>
      {header}
      <div>{children}</div>
      <Footer />
    </>
  );
}
