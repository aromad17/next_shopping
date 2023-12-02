import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import MainHeader from "./mainHeader";
import NormalHeader from "./normalHeader";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [userInfom, setUserInfom]: any = useState();

  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && user !== null) {
        setUserInfom(user);
      } else {
        console.log("no-user");
      }
    });
  }, []);

  let header;
  if (router.pathname.startsWith("/")) {
    header = <MainHeader userInfom={userInfom} />;
    if (
      router.pathname === "/items/[...params]" ||
      router.pathname.startsWith("/auth") ||
      router.pathname.startsWith("/mypage")
    ) {
      header = <NormalHeader userInfom={userInfom} />;
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
