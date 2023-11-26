import Seo from "@/components/Seo";
import Slide from "@/components/main/Slide";
import Weekly from "@/components/main/Weekly";
import NewOne from "@/components/main/NewOne";
import Business from "@/components/main/Business";
import Style from "@/components/main/Style";
import Lookbook from "@/components/main/Lookbook";
import { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <>
      <Seo title="HOME"></Seo>
      <div className="wrap">
        {imageList.length > 0 && (
          <>
            <Slide />
            <Weekly data={imageList[0]} />
            <NewOne data={imageList[1]} />
            <Business />
            <Style data={imageList[2]} />
            <Lookbook data={imageList[3]} />
          </>
        )}
        {imageList.length === 0 && <p>Loading...</p>}
      </div>
    </>
  );
}
