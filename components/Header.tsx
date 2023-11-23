import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [headerOn, setHeaderOn] = useState<boolean>(false);
  const [scrollOn,setScrollOn] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<HTMLElement[]>();


  const headerEnter = (): void => {
    setHeaderOn(true);
  };
  const headerLeave = (): void => {
    setHeaderOn(false);
  };

  useEffect(() => {
    
    let winScroll:number = window.scrollY;

    window.addEventListener("scroll",()=>{

      winScroll = window.scrollY;
      if(winScroll>70){
        setScrollOn(true);
        setHeaderOn(true);
      }else{
        setScrollOn(false);
        setHeaderOn(false);
      }
    })

    const menuItems = document.querySelectorAll<HTMLLIElement>(".top_menu>li");
    setMenuList(Array.from(menuItems));
  }, []);

  if (menuList !== undefined) {
    menuList.forEach((item, idx) => {
      let itemUl = item.parentElement;
      let headerBackground:any = document.querySelector(".header_back");
      item.addEventListener("mouseenter", () => {
        if (itemUl !== null) {
          itemUl.classList.add("on");
          headerBackground.classList.add("on");
          menuList[idx].classList.add("mouse_enter");
        }
      });

      item.addEventListener("mouseleave", () => {
        if (itemUl !== null) {
          itemUl.classList.remove("on");
          headerBackground.classList.remove("on");
          menuList[idx].classList.remove("mouse_enter");
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
        className={`${headerOn ? "on" : ""} ${scrollOn? "scrollOn":""}`}
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
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>신상품</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>베스트</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>전체보기</a></Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>아우터</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>상의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>하의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>원피스</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>액세서리</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>이너/언더웨어</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>홈웨어/잠옷</a></Link>
                      </li>
                    </ul>
                  </div>
              </li>
              <li>
                <Link legacyBehavior href="/man" title="맨">
                  <a>맨</a>
                </Link>
                  <div className="detail_menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>신상품</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>베스트</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>전체보기</a></Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>아우터</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>상의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>하의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>원피스</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>액세서리</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>이너/언더웨어</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>홈웨어/잠옷</a></Link>
                      </li>
                    </ul>
                    
                  </div>
              </li>
              <li>
                <Link legacyBehavior href="/kids" title="키즈">
                  <a>키즈</a>
                </Link>
                  <div className="detail_menu">
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>신상품</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>베스트</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>전체보기</a></Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link legacyBehavior href="#"><a>아우터</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>상의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>하의</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>원피스</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>액세서리</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>이너/언더웨어</a></Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="#"><a>홈웨어/잠옷</a></Link>
                      </li>
                    </ul>
                  </div>
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
          position:fixed;
          top:0;
          left:0;
          display: block;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0);
          z-index:0;
          transition:all 0.3s linear 0s;
        }

        .header_back.on{
          background:rgba(0,0,0,0.7);
          z-index:998;
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

        header.scrollOn{
          position: fixed;
          top:0;
          left:0;
        }

        .header_inner {
          max-width:1440px;
          width:90%;
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

        .logo>a {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .logo>a>img {
        }

        .header_menu ul.top_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: left;
          height: 100%;
        }
        .header_menu>ul.top_menu>li {
          display: inline-block;
          height: 100%;
          padding: 0 20px;
        }
        .header_menu>ul.top_menu li>a {
          position: relative;
          display: block;
          height: 100%;
          line-height: 90px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        .header_menu>ul.top_menu li>a::after {
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

        .header_menu>ul.top_menu>li:hover>a::after {
          width: 100%;
          opacity: 1;
        }

        .header_menu>ul.top_menu li>.detail_menu{
          position: absolute;
          top:90px;
          left:0;
          width: 100%;
          padding:50px 5% 0 5%;
          background: red;
        }

        .header_menu>ul.user_menu {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          float: right;
          height: 100%;
        }
        .header_menu>ul.user_menu>li {
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          display: inline-block;
          margin-right: 32px;
        }

        .header_menu>ul.user_menu>li:last-child {
          margin-right: 0px;
        }

        .header_menu>ul.user_menu>li>a {
          display: block;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        header.on .header_menu>ul.top_menu>li>a {
          color: #000;
        }

        header.on .header_menu>ul.top_menu.on>li>a{
          opacity:0.4;
        }

        header.on .header_menu>ul.top_menu>li.mouse_enter>a {
          opacity:1;
        }

        .header_menu>ul.top_menu>li>a.red_color {
          color: #c41e20;
        }

        header.on .header_menu>ul.top_menu>li>a.red_color {
          color: #c41e20;
        }


      `}</style>
    </>
  );
}
