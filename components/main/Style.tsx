import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Item } from "../../pages/api/images";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Style({ data }: any) {
  const [styleList, setStyleList] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    setStyleList(data[0]);
  }, []);

  console.log(styleList);

  return (
    <>
      <div className="style_wrap cboth" style={{ position: "relative" }}>
        <h2>스타일 픽</h2>
        <div className="style_slide_wrap">
          {styleList ? (
            <Swiper
              style={{
                position: "unset",
                width: "90%",
                minWidth: "1200px",
                paddingBottom: "50px",
                margin: "0 auto",
              }}
              modules={[Navigation, Pagination, Autoplay, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              effect="slide"
              speed={500}
              direction="horizontal"
              loop={true}
            >
              {styleList.map((item, index) => (
                <SwiperSlide key={index} className="new_item">
                  <Link legacyBehavior href="#">
                    <a>
                      <div className="item_img">
                        <img src={item.path} alt={item.title} />
                      </div>
                      <div className="item_title">{item.title}</div>
                      <div className="item_price">
                        {item.price.toLocaleString()}
                      </div>
                      <div className="item_color">
                        {item.color.map((color, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: color,
                              display: "inline-block",
                              width: "10px",
                              height: "10px",
                              marginRight: "5px",
                            }}
                          ></span>
                        ))}
                      </div>
                      <div className={`isWoman `}>
                        {item.isWoman
                          ? "여성용"
                          : item.isMan
                          ? "남성용"
                          : item.isMan && item.isWoman
                          ? ""
                          : "남녀공용"}
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
      <style jsx>{`
        .item_img {
          position: relative;
        }

        .item_img::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: #fff;
          opacity: 0;
        }

        .item_img:hover::after {
          opacity: 0.2;
        }

        .item_img img {
          width: 100%;
        }

        .item_title {
          font-size: 16px;
          line-height: 22px;
          color: #1a1a1a;
          margin: 20px 0 12px;
        }
        .item_price {
          font-size: 22px;
          line-height: 18px;
          color: #1a1a1a;
          font-weight: 500;
        }

        .item_color {
          margin-top: 10px;
        }
        .isWoman {
          display: inline-block;
          font-size: 10px;
          margin: 10px 0;
          background-color: #000;
          color: #fff;
          padding: 2px;
          width: 40px;
          text-align: center;
        }
        .isWoman.none {
          display: none;
        }
        .style_slide_wrap {
          position: relative;
        }
      `}</style>
    </>
  );
}
