import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [headerOn, setHeaderOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const [menuList, setMenuList] = useState<HTMLElement[]>();

  const headerEnter = (): void => {
    setHeaderOn((prev) => !prev);
  };
  const headerLeave = (): void => {
    setHeaderOn((prev) => !prev);
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll<HTMLLIElement>(".top_menu>li");
    setMenuList(Array.from(menuItems));
    console.log(menuList);

    if (menuList !== undefined) {
      menuList.forEach((item, idx) => {
        let itemText = item.parentNode;
        console.log(itemText);
        item.addEventListener("mouseenter", () => {
          menuList[idx].classList.add("mouse_enter");
        });

        item.addEventListener("mouseleave", () => {
          menuList[idx].classList.remove("mouse_enter");
        });
      });
    }
  }, []);

  return (
    <>
      <div className="header_back"></div>
      <header
        onMouseEnter={headerEnter}
        onMouseLeave={headerLeave}
        className={headerOn ? `on` : ""}
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
              </li>
              <li>
                <Link legacyBehavior href="/man" title="맨">
                  <a>맨</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/kids" title="키즈">
                  <a>키즈</a>
                </Link>
              </li>
            </ul>

            <ul className="user_menu">
              <li>
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
          display: none;
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

        .header_inner {
          max-width: 1440px;
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

        .logo a {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .logo a img {
        }

        .header_menu ul.top_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: left;
          height: 100%;
        }
        .header_menu ul.top_menu li {
          display: inline-block;
          height: 100%;
          padding: 0 20px;
        }
        .header_menu ul.top_menu li a {
          position: relative;
          display: block;
          height: 100%;
          line-height: 90px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        .header_menu ul.top_menu li a::after {
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

        .header_menu ul.top_menu li:hover a::after {
          width: 100%;
          opacity: 1;
        }

        .header_menu ul.user_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: right;
          height: 100%;
        }
        .header_menu ul.user_menu li {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          display: inline-block;
          margin-right: 32px;
        }

        .header_menu ul.user_menu li:last-child {
          margin-right: 0px;
        }

        .header_menu ul.user_menu li a {
          display: block;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        header.on .header_menu ul.top_menu li a {
          color: #000;
        }
        header.on .header_menu ul.top_menu li.mouse_enter a {
          color: #2e2e2e;
        }

        .header_menu ul.top_menu li a.red_color {
          color: #c41e20;
        }

        header.on .header_menu ul.top_menu li a.red_color {
          color: #c41e20;
        }
      `}</style>
    </>
  );
}
