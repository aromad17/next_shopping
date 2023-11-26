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
import { Item, LookBook } from "./api/images";

export default function Home() {
  const [womanList, setWomanList] = useState<Item[] | undefined>(undefined);
  const [manList, setManList] = useState<Item[] | undefined>(undefined);
  const [kidsList, setKidsList] = useState<Item[] | undefined>(undefined);
  const [pajamaList, setPajamaList] = useState<Item[] | undefined>(undefined);
  const [newList, setNewList] = useState<Item[] | undefined>(undefined);
  const [styleList, setStyleList] = useState<Item[] | undefined>(undefined);
  const [lookbookList, setLookbookList] = useState<LookBook[] | undefined>(
    undefined
  );
  const [categoryList, setCategoryList] = useState<HTMLElement[]>();
  const [weeklyList, setWeeklyList] = useState<HTMLElement[]>();

  function activationOn(i: number, value: any) {
    for (let el of value) {
      el.classList.remove("on");
    }
    value[i].classList.add("on");
  }

  useEffect(() => {
    axios.get("/api/images").then((response) => {
      setWomanList(response.data[0][0]);
      setManList(response.data[0][1]);
      setKidsList(response.data[0][2]);
      setPajamaList(response.data[0][3]);
      setNewList(response.data[1][0]);
      setStyleList(response.data[2][0]);
      setLookbookList(response.data[3][0]);
      console.log(lookbookList);
    });
    const categoryItems = document.querySelectorAll<HTMLLIElement>(
      ".weekly_category>li"
    );
    setCategoryList(Array.from(categoryItems));

    const weeklyItems =
      document.querySelectorAll<HTMLLIElement>(".weekly_list");
    setWeeklyList(Array.from(weeklyItems));
  }, []);

  if (weeklyList !== undefined) {
    weeklyList[0].classList.add("on");
    weeklyList[0].style.opacity = "1";
  }
  if (categoryList !== undefined) {
    categoryList.forEach((item, idx) => {
      if (weeklyList !== undefined) {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          activationOn(idx, categoryList);
          activationOn(idx, weeklyList);
          weeklyList[idx].style.opacity = "0";

          setTimeout(() => {
            weeklyList[idx].style.opacity = "1";
          }, 100);
        });
      }
    });
  }

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
            autoplay={{ delay: 5000 }}
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
        <div className="weekly_wrap cboth">
          <div className="inner">
            <h2>위클리 베스트</h2>
            <ul className="weekly_category">
              <li className="on">
                <Link legacyBehavior href="#">
                  <a>우먼</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>맨</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>키즈</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>파자마</a>
                </Link>
              </li>
            </ul>
            <div className="weekly_items_wrap">
              <div className="weekly_items">
                <ul className="weekly_list weekly_woman on">
                  {womanList &&
                    womanList.map((item, index) => (
                      <li key={index}>
                        <Link legacyBehavior href="#">
                          <a>
                            <ul>
                              <li className="weekly_image">
                                <span className={item.id > 4 ? "gray" : ""}>
                                  {item.id}
                                </span>
                                <img src={item.path} />
                              </li>
                              <li className="weekly_name">{item.title}</li>
                              <li className="weekly_price">
                                {item.price.toLocaleString()}
                              </li>
                              <li className="weekly_color">
                                {item.color.map((color, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      backgroundColor: color,
                                      display: "inline-block",
                                      width: "10px",
                                      height: "10px",
                                      marginRight: "5px",
                                    }}
                                  ></span>
                                ))}
                              </li>

                              <li className={item.isWoman ? "on" : ""}>
                                여성용
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul className="weekly_list weekly_man">
                  {manList &&
                    manList.map((item, index) => (
                      <li key={index}>
                        <Link legacyBehavior href="#">
                          <a>
                            <ul>
                              <li className="weekly_image">
                                <span className={item.id > 4 ? "gray" : ""}>
                                  {item.id}
                                </span>
                                <img src={item.path} />
                              </li>
                              <li className="weekly_name">{item.title}</li>
                              <li className="weekly_price">
                                {item.price.toLocaleString()}
                              </li>
                              <li className="weekly_color">
                                {item.color.map((color, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      backgroundColor: color,
                                      display: "inline-block",
                                      width: "10px",
                                      height: "10px",
                                      marginRight: "5px",
                                    }}
                                  ></span>
                                ))}
                              </li>
                              <li className={item.isWoman ? "on" : ""}>
                                여성용
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul className="weekly_list weekly_kids">
                  {kidsList &&
                    kidsList.map((item, index) => (
                      <li key={index}>
                        <Link legacyBehavior href="#">
                          <a>
                            <ul>
                              <li className="weekly_image">
                                <span className={item.id > 4 ? "gray" : ""}>
                                  {item.id}
                                </span>
                                <img src={item.path} />
                              </li>
                              <li className="weekly_name">{item.title}</li>
                              <li className="weekly_price">
                                {item.price.toLocaleString()}
                              </li>
                              <li className="weekly_color">
                                {item.color.map((color, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      backgroundColor: color,
                                      display: "inline-block",
                                      width: "10px",
                                      height: "10px",
                                      marginRight: "5px",
                                    }}
                                  ></span>
                                ))}
                              </li>
                              <li className={item.isWoman ? "on" : ""}>
                                여성용
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul className="weekly_list weekly_pajama">
                  {pajamaList &&
                    pajamaList.map((item, index) => (
                      <li key={index}>
                        <Link legacyBehavior href="#">
                          <a>
                            <ul>
                              <li className="weekly_image">
                                <span className={item.id > 4 ? "gray" : ""}>
                                  {item.id}
                                </span>
                                <img src={item.path} />
                              </li>
                              <li className="weekly_name">{item.title}</li>
                              <li className="weekly_price">
                                {item.price.toLocaleString()}
                              </li>
                              <li className="weekly_color">
                                {item.color.map((color, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      backgroundColor: color,
                                      display: "inline-block",
                                      width: "10px",
                                      height: "10px",
                                      marginRight: "5px",
                                    }}
                                  ></span>
                                ))}
                              </li>
                              <li className={item.isWoman ? "on" : ""}>
                                여성용
                              </li>
                            </ul>
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="new_wrap cboth">
          <div className="inner">
            <h2>신상품</h2>
            <div className="new_slide_wrap">
              <Swiper
                style={{ width: "100%" }}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                loop={true}
              >
                {newList &&
                  newList.map((item, index) => (
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
            </div>
          </div>
        </div>
        <div className="business_wrap cboth">
          <ul>
            <li>
              <Link legacyBehavior href="#">
                <a>
                  <img src="/images/business1.webp" />
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                <a>
                  <img src="/images/business2.webp" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="style_wrap cboth" style={{ position: "relative" }}>
          <h2>스타일 픽</h2>
          <div className="style_slide_wrap">
            <Swiper
              style={{
                position: "unset",
                width: "90%",
                minWidth: "1200px",
                transition: "left 0.5s ease-out 0s",
                paddingBottom: "50px",
                margin: "0 auto",
              }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 3000 }}
            >
              {styleList &&
                styleList.map((item, index) => (
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
          </div>
        </div>
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
            <Swiper
              style={{ position: "unset", width: "85%", overflow: "visible" }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              loop={true}
              initialSlide={1}
              loopAdditionalSlides={2}
              effect="slide" // slide 이펙트 사용
              speed={500} // 이동 속도 설정 (밀리초 단위)
              direction="horizontal" // 이동 방향 설정 (수직이면 "vertical", 수평이면 "horizontal")
              className="lookbook_swiper"
            >
              {lookbookList &&
                lookbookList.map((item, index) => (
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
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .inner {
          position: relative;
          max-width: 1740px;
          min-width: 1200px;
          width: 90%;
          height: 100%;
          margin: 0 auto;
          clear: both;
        }

        .inner::after {
          content: "";
          display: block;
          clear: both;
        }

        .cboth {
          clear: both;
        }

        h2 {
          float: left;
          width: 100%;
          text-align: center;
          font-size: 42px;
          font-weight: 600;
          margin: 50px 0 60px;
        }

        .slide_img_wrap {
          display: block;
          width: 100%;
          height: 100%;
        }
        .slide_img_wrap img {
          display: block;
          height: 100%;
        }

        /* weekly */

        .weekly_category {
          float: left;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 30px;
          width: 100%;
          margin-bottom: 50px;
        }
        .weekly_category > li {
          position: relative;
          opacity: 0.5;
        }

        .weekly_category > li::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -5px;
          width: 0%;
          height: 2px;
          background: #000;
          transition: width 0.2s linear 0s;
        }

        .weekly_category > li:hover {
          opacity: 1;
        }

        .weekly_category > li.on {
          opacity: 1;
        }
        .weekly_category > li.on::after {
          width: 100%;
        }
        .weekly_category > li > a {
          text-decoration: none;
          color: #000;
          font-size: 20px;
          font-weight: 600;
        }

        .weekly_items_wrap {
          float: left;
          width: 100%;
        }

        .weekly_items {
          position: relative;
          width: 100%;
        }

        .weekly_wrap > .inner > .weekly_items_wrap > .weekly_items > ul {
          display: none;
          opacity: 0;
          transition: opacity 0.5s linear 0s;
        }

        .weekly_wrap > .inner > .weekly_items_wrap > .weekly_items > ul.on {
          display: flex;
          flex-wrap: wrap;
          opacity: 0;
        }

        .weekly_wrap > .inner > .weekly_items_wrap > .weekly_items > ul > li {
          width: 25%;
          padding: 20px;
          box-sizing: border-box;
        }

        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li:first-child,
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li:nth-child(5) {
          padding-left: 0;
        }

        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li:nth-child(4n) {
          padding-right: 0;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a {
          width: 100%;
          height: 100%;
          display: block;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul {
          width: 100%;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > li {
          width: 100%;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image {
          position: relative;
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0);
          transition: background-color 0.2s linear 0s;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image:hover::after {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image
          > span {
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 50px;
          background-color: orange;
          color: #fff;
          line-height: 50px;
          text-align: center;
          z-index: 2;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image
          > span.gray {
          background-color: #b5b5b5;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > .weekly_image
          > img {
          position: relative;
          width: 100%;
          min-height: 415px;
          max-height: 575.05px;
          object-fit: cover;
          transform: scale(1);
          transition: transform 0.2s linear 0s;
        }
        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li:hover
          > a
          > ul
          > .weekly_image
          > img {
          transform: scale(1.1);
        }

        .weekly_name {
          font-size: 16px;
          line-height: 22px;
          color: #1a1a1a;
          margin: 20px 0 12px;
        }
        .weekly_price {
          font-size: 22px;
          line-height: 18px;
          color: #1a1a1a;
          font-weight: 500;
        }

        .weekly_color {
          margin-top: 10px;
        }

        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > li:last-child {
          display: none;
          font-size: 10px;
          margin: 10px 0;
          background-color: #000;
          color: #fff;
          padding: 2px;
          width: 30px;
          text-align: center;
        }

        .weekly_wrap
          > .inner
          > .weekly_items_wrap
          > .weekly_items
          > ul
          > li
          > a
          > ul
          > li:last-child.on {
          display: inline-block;
        }

        /* new */
        .new_slide_wrap {
          width: 100%;
        }

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

        /* 비즈니스 */
        .business_wrap {
          width: 100%;
          min-width: 1200px;
          margin: 130px 0 50px;
        }
        .business_wrap > ul {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;

          width: 100%;
        }
        .business_wrap > ul > li {
          width: 50%;
        }
        .business_wrap > ul > li > a {
          display: block;
          width: 100%;
        }
        .business_wrap > ul > li > a > img {
          width: 100%;
        }

        /* 스타일픽 */
        .style_slide_wrap {
          position: relative;
        }

        /* 룩북 */
        .lookbook_wrap {
          width: 100%;
          min-width: 1200px;
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

        .lookbook_item h3 {
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
        .lookbook_item h4 {
          position: absolute;
          left: 40px;
          top: 30px;
          width: 100%;
          font-size: 20px;
          z-index: 5;
        }
        .lookbook_slide_wrap .swiper-button-prev {
          left: 50px !important;
        }
        .lookbook_slide_wrap .swiper-button-next {
          right: 50px !important;
        }
      `}</style>
    </>
  );
}
