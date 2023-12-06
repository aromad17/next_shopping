import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";

import { LookBook } from "../../pages/api/images";

import Link from "next/link";

export default function Lookbook({ data }: any) {
  const [lookbookList, setLookbookList] = useState<LookBook[] | undefined>(
    undefined
  );

  const [winWid, setWinWIdth] = useState<number | undefined>();
  useEffect(() => {
    let windowSize: number = window.innerWidth;
    setWinWIdth(windowSize);

    const handleResize = () => {
      windowSize = window.innerWidth;
      setWinWIdth(windowSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winWid]);

  useEffect(() => {
    setLookbookList(data[0]);
  }, []);

  return (
    <>
      {winWid !== undefined && winWid > 1200 ? (
        <div className="lookbook_wrap cboth">
          <h2 style={{ float: "left" }}>룩북</h2>
          <div
            className="lookbook_slide_wrap"
            style={{
              float: "left",
              width: "100%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {lookbookList ? (
              <Swiper
                style={{
                  position: "static",
                  width: "85%",
                  overflow: "visible",
                }}
                modules={[Navigation, A11y, Pagination]}
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                initialSlide={1}
                loopAdditionalSlides={2}
                effect="slide"
                speed={500}
                direction="horizontal"
              >
                {lookbookList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link legacyBehavior href="#">
                      <a>
                        <div className="lookbook_item">
                          <img src={item.path} style={{ width: "100%" }} />
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      ) : (
        <div className="lookbook_wrap m cboth">
          <h2 style={{ float: "left" }}>룩북</h2>
          <div
            className="lookbook_slide_wrap"
            style={{
              width: "95%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {lookbookList ? (
              <Swiper
                style={{
                  position: "static",
                  width: "100%",
                  overflow: "visible",
                }}
                modules={[Pagination, A11y]}
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                effect="slide"
                speed={500}
                direction="horizontal"
              >
                {lookbookList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link legacyBehavior href="#">
                      <a>
                        <div className="lookbook_item">
                          <img src={item.path} style={{ width: "100%" }} />
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      )}
      <style jsx>
        {`
          /* 룩북 */
          .lookbook_wrap {
            width: 100%;
            min-width: 1200px;
          }
          .lookbook_wrap.m {
            width: 100%;
            min-width: 100%;
          }

          .lookbook_wrap.m .lookbook_slide_wrap {
            padding-bottom: 40px;
          }

          .lookbook_wrap::after {
            content: "";
            display: block;
            clear: both;
          }

          .lookbook_item {
            position: relative;
            color: #fff;
            overflow: hidden;
          }
          .lookbook_item:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            transition: background-color 0.2s linear 0s;
          }

          .lookbook_item:hover::after {
            background-color: rgba(0, 0, 0, 0.7);
          }

          .lookbook_item img {
            transition: transform 0.2s linear 0s;
          }

          .lookbook_item:hover img {
            transform: scale(1.2);
          }

          .lookbook_wrap .lookbook_item h3 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            line-height: 1;
            letter-spacing: -1px;
            z-index: 5;
          }
          .lookbook_wrap .lookbook_item h4 {
            position: absolute;
            left: 0px;
            top: 30px;
            width: 100%;
            font-size: 20px;
            z-index: 5;
          }

          .lookbook_wrap.m .lookbook_item h3 {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            font-size: 36px;
            font-weight: 700;
            text-align: center;
            line-height: 1;
            letter-spacing: -1px;
            z-index: 5;
          }
          .lookbook_wrap.m .lookbook_item h4 {
            position: absolute;
            left: 40px;
            top: 30px;
            width: 100%;
            font-size: 16px;
            z-index: 5;
          }

          .lookbook_slide_wrap .swiper-button-prev {
            left: 50px !important;
          }
          .lookbook_slide_wrap .swiper-button-next {
            right: 50px !important;
          }
        `}
      </style>
    </>
  );
}
