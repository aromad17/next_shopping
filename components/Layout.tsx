import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "@/pages/loading";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div>{children}</div>
          <Footer />
        </>
      )}
    </>
  );
}
