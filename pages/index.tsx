import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Seo from "@/components/Seo";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/index.module.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  interface Item {
    id: number;
    category: string;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: object;
  }

  const [list, setList] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <>
      <Seo title="HOME"></Seo>
      <div className="wrap">
        <div className="slide_wrap cboth">
          <Swiper
            style={{ display: "flex" }}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            effect="fade"
          >
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide1.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide2.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide3.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide4.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide5.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .wrap {
          width: 100%;
          height: 100%;
        }
        .cboth {
          clear: both;
        }
        .slide_wrap {
          margin-bottom: 70px;
        }
        .slide_img_wrap {
          display: block;
          width: 100%;
          height: 100%;
        }
        .slide_img_wrap img {
          width: 100%;
        }
      `}</style>
    </>
  );
}
