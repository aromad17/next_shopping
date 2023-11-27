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
  const [headerWrap, setHeaderWrap]: any = useState(null);
  const [footerWrap, setFooterWrap]: any = useState(null);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderWrap(header);
    const footer = document.querySelector("footer");
    setFooterWrap(footer);

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
  if (headerWrap && footerWrap) {
    if (imageList.length > 0) {
      headerWrap.style.display = "block";
      footerWrap.style.display = "block";
    } else if (imageList.length <= 0) {
      headerWrap.style.display = "none";
      footerWrap.style.display = "none";
    }
  }
  return (
    <>
      <Seo title="HOME"></Seo>
      <div className="wrap">
        {imageList.length > 0 ? (
          <>
            <Slide />
            <Weekly data={imageList[0]} />
            <NewOne data={imageList[1]} />
            <Business />
            <Style data={imageList[2]} />
            <Lookbook data={imageList[3]} />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
