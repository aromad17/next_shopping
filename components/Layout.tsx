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
  const [userData, setUserData]: any = useState();
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

    return () => unsubscribe();
  });

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
  return (
    <>
      {header}
      <div>{children}</div>
      <Footer />
    </>
  );
}
