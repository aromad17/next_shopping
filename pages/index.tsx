import Seo from "@/components/Seo";
import Slide from "@/components/main/Slide";
import Weekly from "@/components/main/Weekly";
import NewOne from "@/components/main/NewOne";
import Business from "@/components/main/Business";
import Style from "@/components/main/Style";
import Lookbook from "@/components/main/Lookbook";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading";

export default function Home() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/images");
        setImageList(response.data);
      } catch (error) {
        console.error("에러사항: ", error);
      }
    };
    fetchData();
  }, []);

  const [winWid, setWinWIdth] = useState<number | undefined>();
  useEffect(() => {
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
    };
  }, []);

  return (
    <>
      <Seo title="HOME" />
      <div
        className={winWid !== undefined && winWid > 1200 ? "wrap" : "wrap m"}
      >
        {imageList.length > 0 ? (
          <>
            <Slide winWid={winWid} />
            <Weekly data={imageList[0]} />
            <NewOne data={imageList[1]} winWid={winWid} />
            <Business winWid={winWid} />
            <Style data={imageList[2]} winWid={winWid} />
            <Lookbook data={imageList[3]} winWid={winWid} />
          </>
        ) : (
          <Loading />
        )}
      </div>
      <style jsx>{`
        .wrap {
          position: relative;
          z-index: 1;
        }

        .wrap.m {
          padding-top: 0px;
        }
      `}</style>
    </>
  );
}
