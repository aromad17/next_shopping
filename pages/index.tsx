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
import { Item } from "./api/images";

export default function Home() {
  const [womanList, setWomanList] = useState<Item[] | undefined>(undefined);
  const [manList, setManList] = useState<Item[] | undefined>(undefined);
  const [kidsList, setKidsList] = useState<Item[] | undefined>(undefined);
  const [pajamaList, setPajamaList] = useState<Item[] | undefined>(undefined);
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
    });
    const categoryItems = document.querySelectorAll<HTMLLIElement>(
      ".weekly_category>li"
    );
    setCategoryList(Array.from(categoryItems));

    const weeklyItems =
      document.querySelectorAll<HTMLLIElement>(".weekly_list");
    setWeeklyList(Array.from(weeklyItems));
  }, []);

  if (categoryList !== undefined) {
    categoryList.forEach((item, idx) => {
      if (weeklyList !== undefined) {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          activationOn(idx, categoryList);
          activationOn(idx, weeklyList);
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
        <div className="business_wrap cboth"></div>
        <div className="style_wrap cboth"></div>
        <div className="lookbook_wrap cboth"></div>
        <div className="snap_wrap cboth"></div>
      </div>

      <style jsx>{`
        .wrap {
          width: 100%;
          height: 100%;
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
          margin-bottom: 50px;
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
          display: flex;
          position: absolute;
          flex-wrap: wrap;
          opacity: 0;
          transition: opacity 0.3s linear 0s;
        }

        .weekly_wrap > .inner > .weekly_items_wrap > .weekly_items > ul.on {
          opacity: 1;
          left: 0;
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
      `}</style>
    </>
  );
}
