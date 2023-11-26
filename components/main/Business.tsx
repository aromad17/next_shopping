import Link from "next/link";

export default function Business() {
  return (
    <>
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
      <style jsx>{`
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
      `}</style>
    </>
  );
}
