import { ReactNode } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import MainHeader from "./mainHeader";
import NormalHeader from "./normalHeader";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  let header;
  if (router.pathname === "/") {
    header = <MainHeader />;
  } else if (router.pathname === "/items/[...params]") {
    header = <NormalHeader />;
  }

  return (
    <>
      {header}
      <div>{children}</div>
      <Footer />
    </>
  );
}
