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
            modules={[Autoplay, EffectFade, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            effect="fade"
          >
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide1_m.jpg`} alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide2_m.jpg`} alt="" />
                  <ul className="slide_sub">
                    <li className="slide_sub_1">TREND</li>
                    <li className="slide_sub_2">daily look trend</li>
                    <li className="slide_sub_3">
                      키워드로 알아보는 플리스 스타일링
                    </li>
                  </ul>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide3_m.jpg`} alt="" />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide4_m.jpg`} alt="" />
                  <ul className="slide_sub">
                    <li className="slide_sub_1">TREND</li>
                    <li className="slide_sub_2">OUTER COLLECTION</li>
                    <li className="slide_sub_3">
                      스파오에서 선보이는 아우터 컬렉션
                    </li>
                  </ul>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide5_m.jpg`} alt="" />
                  <ul className="slide_sub">
                    <li className="slide_sub_1">TREND</li>
                    <li className="slide_sub_2">OUTER COLLECTION</li>
                    <li className="slide_sub_3">
                      스파오에서 선보이는 아우터 컬렉션
                    </li>
                  </ul>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link legacyBehavior href="#">
                <a className="slide_img_wrap">
                  <img src={`/images/slide6_m.jpg`} alt="" />
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
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
          }
          .slide_img_wrap img {
            display: block;
            height: 100%;
          }

          .slide_img_wrap > .slide_sub {
            position: absolute;
            left: 0;
            bottom: 62px;
            padding: 0 20px;
            box-sizing: border-box;
            opacity: 0;
            transition: all 0.5s linear 0.3s;
          }

          .slide_img_wrap > .slide_sub > li {
            text-transform: uppercase;
            color: #fff;
          }

          .slide_sub_1 {
            font-size: 12px;
            margin: 0 0 16px;
            font-weight: 600;
          }

          .slide_sub_2 {
            margin: 0 0 12px;
            font-size: 32px;
            line-height: 38px;
            font-weight: 600;
          }
          .slide_sub_3 {
            font-size: 16px;
            font-weight: 400;
          }

          .slide_wrap_m img {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
