import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function Slide() {
  return (
    <>
      <div className="slide_wrap cboth">
        <Swiper
          style={{ display: "flex" }}
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
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
          <SwiperSlide>
            <Link legacyBehavior href="#">
              <a className="slide_img_wrap">
                <img src="/images/slide6.jpg" alt="" />
              </a>
            </Link>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <style>
        {`
        .slide_img_wrap {
            display: block;
            width: 100%;
            height: 100%;
          }
          .slide_img_wrap img {
            display: block;
            height: 100%;
          }
        `}
      </style>
    </>
  );
}
