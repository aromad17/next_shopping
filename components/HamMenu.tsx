import Seo, { TitleName } from "@/components/Seo";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { FaXmark } from "react-icons/fa6";
import { getAuth, signOut } from "firebase/auth";
export default function HamMenu({ hamClick, setHamClick, userData }: any) {
  const auth = getAuth();
  const onHamClick = () => {
    setHamClick((prev: boolean) => !prev);
  };

  const onSignOut = () => {
    auth.signOut().catch((error) => {
      console.error("로그아웃 오류:", error);
    });
  };
  return (
    <>
      <div
        className={`mobile_nav ${hamClick ? "on" : ""}`}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="ham_menu_top">
          {userData === null ? (
            <ul className="auth">
              <li onClick={onHamClick}>
                <Link legacyBehavior href="/auth/auth">
                  <a>로그인</a>
                </Link>
              </li>
              <li onClick={onHamClick}>
                <Link legacyBehavior href="/auth/join">
                  <a>회원가입</a>
                </Link>
              </li>
            </ul>
          ) : (
            <div className="ham_menu_me" onClick={onHamClick}>
              <Link legacyBehavior href="/mypage">
                <a>
                  {userData && userData !== undefined ? (
                    <img
                      src={
                        userData.photoURL
                          ? userData.photoURL
                          : "/images/avatar.png"
                      }
                    />
                  ) : (
                    <></>
                  )}
                </a>
              </Link>
              <span onClick={onSignOut}>로그아웃</span>
            </div>
          )}

          <h1>
            <Link legacyBehavior href="/">
              <a>
                <img src="/images/top_logo_fixed.png" alt="logo" />
              </a>
            </Link>
          </h1>
          <div className="close_menu" onClick={onHamClick}>
            <FaXmark />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mobile_nav {
          position: fixed;
          left: calc((-100%) - (20px));
          top: 0;
          background-color: white;
          transition: left 0.3s linear 0s;
          z-index: 999;
        }
        .mobile_nav.on {
          position: fixed;
          left: 0%;
          top: 0;
        }
        .ham_menu_top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 92%;
          margin: 0 auto;
          padding: 20px 0;
          border-bottom: 1px solid#e5e5e5;
        }
        .ham_menu_me {
          display: flex;
          gap: 10px;
          align-items: center;
          font-weight: 600;
        }

        .ham_menu_me > span {
          cursor: pointer;
        }

        .ham_menu_me > a {
          display: block;
        }
        .ham_menu_me > a > img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .ham_menu_top > ul > li {
          display: inline-block;
        }
        .ham_menu_top > ul > li:first-child {
          margin-right: 10px;
        }
        .ham_menu_top > ul > li > a {
          color: #000;
          text-decoration: none;
        }
        .ham_menu_top h1 {
          display: flex;
        }
        .ham_menu_top h1 * {
          display: block;
          height: 30px;
        }
        .close_menu,
        .close_menu svg {
          cursor: pointer;
          font-size: 30px;
          width: 30px;
          height: 30px;
        }
      `}</style>
    </>
  );
}
