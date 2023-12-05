import { Item } from "../../pages/api/images";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Weekly_m from "./Weekly_m";
import Weekly_pc from "./Weekly_pc";

export default function Weekly({ data }: any) {
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

  return (
    <>
      {winWid !== undefined && winWid > 1200 ? (
        <Weekly_pc data={data} />
      ) : (
        <Weekly_m data={data} />
      )}

      <style jsx>{`
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
          max-height: 415px;
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
        .weekly_wrap.m .weekly_items_wrap {
          position: relative;
        }

        .weekly_item_m {
          width: 50%;
          margin-bottom: 20px;
        }

        .weekly_item_m > .weekly_image {
          width: 92%;
          margin: 0 auto;
        }

        .weekly_item_m > .weekly_image > img {
          width: 100%;
        }
        .weekly_item_m > ul {
          width: 92%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
