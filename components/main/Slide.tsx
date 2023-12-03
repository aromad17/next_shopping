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

export default function Slide({ winWid }: any) {
  return (
    <>
      {winWid !== undefined && winWid > 1200 ? (
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
      ) : (
        <div className="slide_wrap_m cboth">
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
                  <img src="/images/slide1_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide2_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide3_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide4_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide5_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src="/images/slide6_m.jpg" alt="" />
                </a>
              </Link>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      )}

      <style jsx>
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

          .slide_wrap_m img {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
