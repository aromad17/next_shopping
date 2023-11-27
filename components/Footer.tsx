import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [familyList, setFamilyList]: any = useState(null);

  useEffect(() => {
    const familyDropDown: HTMLElement | null =
      document.querySelector(".family_list");
    setFamilyList(familyDropDown);
  }, []);

  function onFamilyEnter() {
    familyList.style.display = "block";
  }

  function onFamilyLeave() {
    familyList.style.display = "none";
  }

  return (
    <>
      <footer className="footer_wrap">
        <div className="footer_inner">
          <div className="footer_left">
            <div className="cs_center">
              <p className="phone">010-6685-0145</p>
              <p className="time">상담시간 : 오전 0시~오후 12시</p>
              <p className="email">
                email : aromad1117@naver.com (구직 문의)
                <br />
                email : aromad1117@naver.com (취업 문의)
              </p>
            </div>
            <div className="company_info">
              (주)우리집랜드월드내방책상<span></span>사업자등록번호 :
              000-123-45678 [만든사람정보]<span></span>백수 : 오랜시간동안
              <br />
              내이름 : 이상현
              <span></span>서울특별시 동작구 성대로 279-123 (가산동)
              우리집컴퓨터<span></span>개인정보 보호책임자 : 이상현
              <br />
              구직중입니다. 취업 문의는 이메일이나 문자,전화로 부탁드립니다.
            </div>
            <div className="icons">
              <ul className="icons_emblem">
                <li>
                  <img src="/images/emblem01.png" alt="엠블렘 1" />
                </li>
                <li>
                  <img src="/images/emblem02.png" alt="엠블렘 2" />
                </li>
                <li>
                  <img src="/images/emblem03.png" alt="엠블렘 3" />
                </li>
              </ul>
              <ul className="icons_sns">
                <li>
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        src="/images/bt_sns_face.png"
                        alt="페이스북으로 이동"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>
                      <img src="/images/bt_sns_insta.png" alt="인스타로 이동" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>
                      <img src="/images/bt_sns_you.png" alt="유튜브로 이동" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>
                      <img src="/images/bt_sns_blog.png" alt="블로그로 이동" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>
                      <img src="/images/bt_sns_post.png" alt="포스트로 이동" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
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
            <div
              className="family_site cboth"
              onMouseEnter={onFamilyEnter}
              onMouseLeave={onFamilyLeave}
            >
              <Link legacyBehavior href="#">
                <a>
                  패밀리 사이트
                  <img
                    src="/images/bt_icon_family.png"
                    alt="패밀리 사이트 목록 열기"
                  />
                </a>
              </Link>
              <ul className="family_list">
                <li>
                  <Link legacyBehavior href="#">
                    <a>이랜드그룹</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>베어스타운</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>서울이랜드FC</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>올리브스튜디오</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>이랜드리테일</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>외식브랜드</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>이랜드</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>이월드</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>이크루즈</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>켄싱턴리조트</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>켄싱턴제주호텔</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a>켄싱턴호텔</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="copy">
              Copyright ⓒ 스파오닷컴 All Right Reserved.
            </div>

            <ul>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src="/images/bt_icon_lgec.png"
                      alt="에스크로 서비스 이용하기"
                    />
                    구매안전(에스크로)서비스
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src="/images/bt_icon_app01.png"
                      alt="스파오 구글 스토어로 이동"
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="#">
                  <a>
                    <img
                      src="/images/bt_icon_app02.png"
                      alt="스파오 앱 스토어로 이동"
                    />
                  </a>
                </Link>
                스파오 APP 다운로드
              </li>
              <li>
                <Link legacyBehavior href="#">
                  <a>
                    <img src="/images/bt_icon_global.png" alt="언어선택" />
                    대한민국 | 한국어
                  </a>
                </Link>
              </li>
            </ul>
          </div>
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

        .icons {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .icons > ul {
          display: flex;
          flex-direction: row;
        }
        .icons > ul.icons_emblem {
          border-right: 1px solid #e5e5e5;
          padding-right: 20px;
        }
        .icons > ul.icons_emblem li {
          margin-right: 15px;
        }

        .icons > ul.icons_emblem li img {
          height: 40px;
        }
        ul.icons_sns {
          padding-left: 20px;
        }
        ul.icons_sns li {
          margin-right: 15px;
        }
        .footer_right > ul {
          float: left;
          text-align: right;
          margin-left: 50px;
        }

        .footer_right > ul:first-child {
          margin-left: 0;
        }

        .footer_right > ul > li > a {
          line-height: 30px;
          font-size: 13px;
          color: #606060;
        }

        .footer_right > ul > li > a > strong {
          font-weight: 600;
          color: #000;
        }
        .family_site {
          position: relative;
          margin-top: 76px;
          float: right;
        }

        .family_site > a {
          font-size: 13px;
          color: #1a1a1a;
          line-height: 33px;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          padding: 5px 21px;
        }

        .family_site > a > img {
          vertical-align: middle;
          padding-left: 10px;
        }

        .family_list {
          display: none;
          position: absolute;
          bottom: 33px;
          height: 150px;
          background-color: #f7f7f7;
          padding: 5px 15px;
          border: 1px solid #606060;
          border-radius: 5px;
          overflow-y: scroll;
        }

        .family_list > li {
        }

        .family_list li a {
          font-size: 13px;
          color: #909090;
          line-height: 25px;
        }

        .footer_bottom .copy {
          float: left;
        }
        .footer_bottom ul {
          float: right;
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
        }
        .footer_bottom ul li a {
          opacity: 0.7;
          color: #909090;
          transition: opacity 0.3s linear 0s;
        }

        .footer_bottom ul li:hover a {
          opacity: 1;
        }
        .footer_bottom ul li a img {
          vertical-align: middle;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
}
