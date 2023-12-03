import Link from "next/link";

export default function MobileHeader({ userData }: any) {
  return (
    <>
      <header>
        <div className="header_wrap">
          <div className="ham">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="logo">
            <Link legacyBehavior href="/">
              <a>
                <img src="/images/top_logo_fixed.png" alt="logo" />
              </a>
            </Link>
          </h1>
          <div className="user_menu">
            <ul>
              <li>
                <Link legacyBehavior href="/mypage">
                  <a>
                    <img src="/images/top_mypage.png" />
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img src="/images/top_cart_pc.png" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-color: white;
          border-bottom: 1px solid#e5e5e5;
          z-index: 999;
        }

        .header_wrap {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          height: 100%;
          margin: 0 auto;
        }

        .ham {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 20px;
          cursor: pointer;
        }

        .ham > span {
          width: 100%;
          height: 3px;
          border-radius: 20%;
          background-color: #000;
        }

        .logo {
          height: 30px;
        }

        .logo img {
          height: 100%;
        }

        .user_menu {
          height: 25px;
        }

        .user_menu ul {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          height: 100%;
        }

        .user_menu ul li {
          height: 100%;
        }
        .user_menu ul li a {
          display: block;
          height: 100%;
        }

        .user_menu ul li a img {
          display: block;
          height: 100%;
        }
      `}</style>
    </>
  );
}
