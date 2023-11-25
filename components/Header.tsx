import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [headerOn, setHeaderOn] = useState<boolean>(false);
  const [scrollOn, setScrollOn] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<HTMLElement[]>();
  const [detailMenu, setDetailMenu] = useState<HTMLElement[]>();

  const headerEnter = (): void => {
    let winScroll: number = window.scrollY;
    if (winScroll < 70) {
      console.log(winScroll);
      setHeaderOn(true);
    }
  };
  const headerLeave = (): void => {
    let winScroll: number = window.scrollY;
    if (winScroll < 70) {
      console.log(winScroll);
      setHeaderOn(false);
    }
  };

  useEffect(() => {
    let winScroll: number = window.scrollY;
    const myPage: HTMLElement | null = document.querySelector(".mypage");
    const mySub: HTMLElement | null = document.querySelector(".sub_mypage");

    if (myPage !== null && mySub !== null) {
      myPage.addEventListener("mouseenter", () => {
        mySub.style.display = "block";
      });
      myPage.addEventListener("mouseleave", () => {
        mySub.style.display = "none";
      });
    }

    window.addEventListener("scroll", () => {
      winScroll = window.scrollY;
      if (winScroll > 70) {
        setScrollOn(true);
        setHeaderOn(true);
      } else {
        setScrollOn(false);
        setHeaderOn(false);
      }
    });

    const menuItems = document.querySelectorAll<HTMLLIElement>(".top_menu>li");
    setMenuList(Array.from(menuItems));
    const details = document.querySelectorAll<HTMLLIElement>(".detail_menu");
    setDetailMenu(Array.from(details));
  }, []);

  if (menuList !== undefined && detailMenu !== undefined) {
    menuList.forEach((item, idx) => {
      let itemUl = item.parentElement;
      const headerBackground: HTMLElement | null =
        document.querySelector(".header_back");

      item.addEventListener("mouseenter", () => {
        if (itemUl !== null && headerBackground !== null) {
          itemUl.classList.add("on");
          headerBackground.classList.add("on");
          menuList[idx].classList.add("mouse_enter");

          if (detailMenu !== null && idx > 1 && idx < 5) {
            const detailNum = idx - 2;
            detailMenu[detailNum].classList.add("on");
          }
        }
      });

      item.addEventListener("mouseleave", () => {
        if (itemUl !== null && headerBackground !== null) {
          itemUl.classList.remove("on");
          headerBackground.classList.remove("on");
          menuList[idx].classList.remove("mouse_enter");

          if (detailMenu !== null && idx > 1 && idx < 5) {
            const detailNum = idx - 2;
            detailMenu[detailNum].classList.remove("on");
          }
        }
      });
    });
  }

  return (
    <>
      <div className="header_back"></div>
      <header
        onMouseEnter={headerEnter}
        onMouseLeave={headerLeave}
        className={`${headerOn ? "on" : ""} ${scrollOn ? "scrollOn" : ""}`}
      >
        <div className="header_inner">
          <div className="header_menu">
            <h1 className="logo">
              <Link legacyBehavior href="/" title="홈">
                <a>
                  <img
                    src={
                      headerOn
                        ? "/images/top_logo_pc.png"
                        : "/images/top_logo_pc_wh.png"
                    }
                    alt="logo"
                  />
                </a>
              </Link>
            </h1>

            <ul className="top_menu">
              <li>
                <Link legacyBehavior href="/discount">
                  <a className="red_color">할인상품</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/best" title="베스트">
                  <a>베스트</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/woman" title="우먼">
                  <a>우먼</a>
                </Link>
                <div className="detail_menu">
                  <div className="detail_inner cboth">
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>신상품</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>베스트</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>전체보기</a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>아우터</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>상의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>하의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>원피스</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>액세서리</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>이너/언더웨어</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>홈웨어/잠옷</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link legacyBehavior href="/man" title="맨">
                  <a>맨</a>
                </Link>
                <div className="detail_menu">
                  <div className="detail_inner cboth">
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>신상품</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>베스트</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>전체보기</a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>아우터</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>상의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>하의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>원피스</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>액세서리</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>이너/언더웨어</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>홈웨어/잠옷</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link legacyBehavior href="/kids" title="키즈">
                  <a>키즈</a>
                </Link>
                <div className="detail_menu">
                  <div className="detail_inner cboth">
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>신상품</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>베스트</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>전체보기</a>
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>아우터</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>상의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>하의</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>원피스</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>액세서리</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>이너/언더웨어</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#">
                          <a>홈웨어/잠옷</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="user_menu">
              <li className="mypage">
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src={
                        headerOn
                          ? "/images/top_mypage.png"
                          : "/images/top_mypage_wh.png"
                      }
                      alt=""
                    />
                  </a>
                </Link>
                <ul className="sub_mypage">
                  <li>
                    <Link legacyBehavior href="#">
                      <a>LOGIN</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>ORDER</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src={
                        headerOn
                          ? "/images/top_search.png"
                          : "/images/top_search_wh.png"
                      }
                      alt=""
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src={
                        headerOn
                          ? "/images/top_wish.png"
                          : "/images/top_wish_wh.png"
                      }
                      alt=""
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src={
                        headerOn
                          ? "/images/top_cart_pc.png"
                          : "/images/top_cart_pc_wh.png"
                      }
                      alt=""
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <style jsx>{`
        .header_back {
          position: fixed;
          top: -10000px;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0);
          z-index: 0;
          transition: background 0.3s linear 0s;
        }

        .cboth {
        }

        .cboth::after {
          content: "";
          display: block;
          clear: both;
        }

        .header_back.on {
          top: 0px;
          background: rgba(0, 0, 0, 0.7);
          z-index: 998;
        }

        header {
          position: absolute;
          top: 40px;
          width: 100%;
          height: 90px;
          z-index: 999;
          background-color: transparent;
        }

        header.on {
          border-bottom: 1px solid #e5e5e5;
          background-color: #fff;
        }

        header.scrollOn {
          position: fixed;
          top: 0;
          left: 0;
        }

        .header_inner {
          max-width: 1740px;
          min-width: 1200px;
          width: 90%;
          height: 100%;
          margin: 0 auto;
        }
        .header_menu {
          width: 100%;
          height: 100%;
        }

        .logo {
          height: 100%;
          margin-right: 50px;
          float: left;
        }

        .logo > a {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .logo > a > img {
        }

        .header_menu ul.top_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: left;
          height: 100%;
        }
        .header_menu > ul.top_menu > li {
          display: inline-block;
          height: 100%;
          padding: 0 20px;
        }
        .header_menu > ul.top_menu > li > a {
          position: relative;
          display: block;
          height: 100%;
          line-height: 90px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        .header_menu > ul.top_menu > li > a::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #1a1a1a;
          opacity: 0;
          transition: all 0.3s linear 0s;
        }

        .header_menu > ul.top_menu > li:hover > a::after {
          width: 100%;
          opacity: 1;
        }

        .header_menu > ul.user_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: right;
          height: 100%;
        }
        .header_menu > ul.user_menu > li {
          display: inline-block;
          height: 100%;
          margin-right: 32px;
        }

        .header_menu > ul.user_menu > li:first-child {
          position: relative;
        }

        .sub_mypage {
          display: none;
          position: absolute;
          top: 90px;
          left: -30px;
          width: 90px;
          padding: 5px 0;
          border: 1px solid #e3e3e3;
          z-index: 10;
          background-color: #fff;
        }
        .sub_mypage > li {
          height: 30px;
          line-height: 30px;
          font-size: 13px;
          text-align: center;
        }
        .sub_mypage > li > a {
          text-decoration: none;
          color: #555;
          transition: opacity 0.5s linear 0s;
          opacity: 0.6;
        }

        .sub_mypage > li > a:hover {
          opacity: 1;
        }

        .header_menu > ul.user_menu > li:last-child {
          margin-right: 0px;
        }

        .header_menu > ul.user_menu > li > a {
          display: block;
          line-height: 90px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        header.on .header_menu > ul.user_menu > li > a {
          transition: opacity 0.3s linear 0s;
          opacity: 0.5;
        }

        header.on .header_menu > ul.user_menu > li:hover > a {
          opacity: 1;
        }

        .header_menu > ul.top_menu li > .detail_menu {
          position: absolute;
          top: -1000px;
          left: 0;
          width: 100%;
          padding: 50px 5% 0 5%;
          background: #fff;
          box-sizing: border-box;
        }

        .header_menu > ul.top_menu li > .detail_menu.on {
          top: 90px;
          display: block;
        }

        .header_menu > ul.top_menu li > .detail_menu > .detail_inner {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          padding-bottom: 60px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out 0s;
        }

        .header_menu > ul.top_menu li > .detail_menu.on > .detail_inner {
          opacity: 1;
        }

        .header_menu > ul.top_menu li > .detail_menu > .detail_inner > ul {
          float: left;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul:first-child {
          width: 180px;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul:first-child
          > li
          > a {
          color: #1a1a1a;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul:last-child {
          width: 200px;
          padding-left: 40px;
          border-left: 1px solid #e5e5e5;
        }

        .header_menu > ul.top_menu li > .detail_menu > .detail_inner > ul > li {
          height: 30px;
          line-height: 30px;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul
          > li
          > a {
          position: relative;
          color: #808080;
          text-decoration: none;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul
          > li
          > a::after {
          content: "";
          display: block;
          position: absolute;
          top: 3px;
          right: 3px;
          width: 7px;
          height: 7px;
          background-color: #c41e20;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.3s ease-in 0s;
        }

        .header_menu
          > ul.top_menu
          li
          > .detail_menu
          > .detail_inner
          > ul
          > li:hover
          > a::after {
          top: 0px;
          right: -7px;
          opacity: 1;
        }

        header.on .header_menu > ul.top_menu > li > a {
          color: #000;
        }

        header.on .header_menu > ul.top_menu.on > li > a {
          opacity: 0.4;
        }

        header.on .header_menu > ul.top_menu > li.mouse_enter > a {
          opacity: 1;
        }

        .header_menu > ul.top_menu > li > a.red_color {
          color: #c41e20;
        }

        header.on .header_menu > ul.top_menu > li > a.red_color {
          color: #c41e20;
        }
      `}</style>
    </>
  );
}
