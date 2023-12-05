import Link from "next/link";
import { useEffect, useState } from "react";

export default function Business() {
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
      <div
        className={`business_wrap cboth ${
          winWid !== undefined && winWid < 1200 ? "m" : ""
        }`}
      >
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
      <style jsx>{`
        /* 비즈니스 */
        .business_wrap {
          width: 100%;
          margin: 130px 0 50px;
        }
        .business_wrap.m {
          margin: 60px 0 0 0;
        }

        .business_wrap > ul {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          width: 100%;
        }

        .business_wrap.m > ul {
          display: block;
        }

        .business_wrap > ul > li {
          width: 50%;
        }

        .business_wrap.m > ul > li {
          width: 80%;
        }
        .business_wrap.m > ul > li:first-child {
          float: left;
        }

        .business_wrap.m > ul > li:last-child {
          float: right;
        }
        .business_wrap > ul > li > a {
          display: block;
          width: 100%;
        }

        .business_wrap > ul > li > a > img {
          width: 100%;
        }
      `}</style>
    </>
  );
}
