import { Item } from "../../pages/api/images";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Weekly_pc({ data }: any) {
  function activationOn(i: number, value: any) {
    for (let el of value) {
      el.classList.remove("on");
    }
    value[i].classList.add("on");
  }
  const [womanList, setWomanList] = useState<Item[] | undefined>(undefined);
  const [manList, setManList] = useState<Item[] | undefined>(undefined);
  const [kidsList, setKidsList] = useState<Item[] | undefined>(undefined);
  const [pajamaList, setPajamaList] = useState<Item[] | undefined>(undefined);
  const [categoryList, setCategoryList] = useState<HTMLElement[]>();
  const [weeklyList, setWeeklyList] = useState<HTMLElement[]>();

  useEffect(() => {
    setWomanList(data[0]);
    setManList(data[1]);
    setKidsList(data[2]);
    setPajamaList(data[3]);

    const categoryItems = document.querySelectorAll<HTMLLIElement>(
      ".weekly_category>li"
    );
    setCategoryList(Array.from(categoryItems));

    const weeklyItems =
      document.querySelectorAll<HTMLLIElement>("ul.weekly_list");
    setWeeklyList(Array.from(weeklyItems));
    if (weeklyList !== undefined) {
    }
  }, [data]);

  const router = useRouter();

  const onClick = (
    id: number,
    category: string,
    title: string,
    path: string,
    price: number,
    color: string[]
  ) => {
    router.push(
      {
        pathname: `/items/${id}/${title}`,
        query: {
          id,
          category,
          title,
          color,
          price,
          path,
        },
      },
      `/items/${id}/${title}`
    );
  };

  if (weeklyList && weeklyList !== undefined) {
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
                    <li
                      key={index}
                      onClick={(e): void => {
                        e.preventDefault();
                        onClick(
                          item.id,
                          item.category,
                          item.title,
                          item.path,
                          item.price,
                          item.color
                        );
                      }}
                    >
                      <Link
                        legacyBehavior
                        href={{
                          pathname: `/items/${item.id}/${item.title}`,
                          query: {
                            id: item.id,
                            category: item.category,
                            title: item.title,
                            color: item.color,
                            price: item.price,
                            path: item.path,
                          },
                        }}
                        as={`/items/${item.id}/${item.title}`}
                      >
                        <a>
                          <ul>
                            <li className="weekly_image">
                              <span className={index > 3 ? "gray" : ""}>
                                {index + 1}
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

                            <li className={item.isWoman ? "on" : ""}>여성용</li>
                          </ul>
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="weekly_list weekly_man">
                {manList &&
                  manList.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e): void => {
                        e.preventDefault();
                        onClick(
                          item.id,
                          item.category,
                          item.title,
                          item.path,
                          item.price,
                          item.color
                        );
                      }}
                    >
                      <Link
                        legacyBehavior
                        href={{
                          pathname: `/items/${item.id}/${item.title}`,
                          query: {
                            id: item.id,
                            category: item.category,
                            title: item.title,
                            color: item.color,
                            price: item.price,
                            path: item.path,
                          },
                        }}
                        as={`/items/${item.id}/${item.title}`}
                      >
                        <a>
                          <ul>
                            <li className="weekly_image">
                              <span className={index > 3 ? "gray" : ""}>
                                {index + 1}
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
                            <li className={item.isWoman ? "on" : ""}>여성용</li>
                          </ul>
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="weekly_list weekly_kids">
                {kidsList &&
                  kidsList.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e): void => {
                        e.preventDefault();
                        onClick(
                          item.id,
                          item.category,
                          item.title,
                          item.path,
                          item.price,
                          item.color
                        );
                      }}
                    >
                      <Link
                        legacyBehavior
                        href={{
                          pathname: `/items/${item.id}/${item.title}`,
                          query: {
                            id: item.id,
                            category: item.category,
                            title: item.title,
                            color: item.color,
                            price: item.price,
                            path: item.path,
                          },
                        }}
                        as={`/items/${item.id}/${item.title}`}
                      >
                        <a>
                          <ul>
                            <li className="weekly_image">
                              <span className={index > 3 ? "gray" : ""}>
                                {index + 1}
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
                            <li className={item.isWoman ? "on" : ""}>여성용</li>
                          </ul>
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
              <ul className="weekly_list weekly_pajama">
                {pajamaList &&
                  pajamaList.map((item, index) => (
                    <li
                      key={index}
                      onClick={(e): void => {
                        e.preventDefault();
                        onClick(
                          item.id,
                          item.category,
                          item.title,
                          item.path,
                          item.price,
                          item.color
                        );
                      }}
                    >
                      <Link
                        legacyBehavior
                        href={{
                          pathname: `/items/${item.id}/${item.title}`,
                          query: {
                            id: item.id,
                            category: item.category,
                            title: item.title,
                            color: item.color,
                            price: item.price,
                            path: item.path,
                          },
                        }}
                        as={`/items/${item.id}/${item.title}`}
                      >
                        <a>
                          <ul>
                            <li className="weekly_image">
                              <span className={index > 3 ? "gray" : ""}>
                                {index + 1}
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
                            <li className={item.isWoman ? "on" : ""}>여성용</li>
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
