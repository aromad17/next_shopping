import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer_wrap">
        <div className="footer_inner">
          <div className="footer_left">
            <div className="cs_center">
              <p className="phone">1670-9600</p>
              <p className="time">
                상담시간 : 오전 10시~오후 5시(토요일, 공휴일 휴무)
              </p>
              <p className="email">
                email : spao@eland.co.kr(단체주문 문의)
                <br />
                email : spao_mkt@eland.co.kr(마케팅 협찬 문의)
              </p>
            </div>
            <div className="company_info">
              (주)이랜드월드패션사업부<span></span>사업자등록번호 : 113-85-19030
              [사업자정보확인]<span></span>통신판매업 신고번호 : 제 2005-01053
              호<br />
              대표이사 : 최운식
              <span></span>서울특별시 금천구 가산디지털1로 159 (가산동)
              이랜드가산동사옥<span></span>개인정보 보호책임자 : 최운식
              <br />
              사옥 주소로 상품을 발송하시면 교환ㆍ환불이 불가하므로,
              교환ㆍ환불은 사이트 내에서 신청해주시기 바랍니다.
            </div>
            <div className="icons"></div>
          </div>
          <div className="footer_right">
            <ul>
              <li>
                <Link legacyBehavior href="#">
                  <a>브랜드소개</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>오프라인 매장안내</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <strong>개인정보 처리방침</strong>
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>약관안내</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>윤리경영</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link legacyBehavior href="#">
                  <a>공지사항</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>회원혜택</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>채용정보 및 인사제도</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>자주묻는질문 FAQ</a>
                </Link>
              </li>
            </ul>
            <div className="family_site cboth">
              <Link legacyBehavior href="#">
                <a>패밀리 사이트</a>
              </Link>
            </div>
          </div>
          <div className="footer_bottom"></div>
        </div>
      </footer>
      <style jsx>{`
        .footer_wrap {
          width: 100%;
          margin: 50px auto 0;
          border: 0;
          padding: 50px 0;
          background-color: #f7f7f7;
        }

        .footer_inner {
          width: 90%;
          min-width: 1200px;
          margin: 0 auto;
        }
        .footer_inner::after {
          content: "";
          display: block;
          clear: both;
        }
        .footer_left {
          float: left;
          padding: 0;
          margin: 0 0 30px 0;
        }
        .footer_right {
          float: right;
        }
        .footer_bottom {
          clear: both;
          border-top: 1px solid #e5e5e5;
          font-size: 13px;
          color: #909090;
          padding-top: 30px;
        }

        .cs_center {
          margin-bottom: 40px;
        }

        .footer_left > .cs_center > p {
          line-height: 23px;
        }
        .phone {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }
        .time {
          font-size: 13px;
          color: #1a1a1a;
          line-height: 23px;
        }
        .email {
          font-size: 13px;
          font-weight: 400;
          color: #909090;
        }
        .company_info {
          font-size: 13px;
          color: #909090;
          line-height: 25px;
          margin-bottom: 40px;
        }
        .company_info span {
          background: url(/images/bt_copy_line.png) no-repeat;
          background-size: 1px 11px;
          width: 1px;
          height: 11px;
          margin: 0 5px 0 10px;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
