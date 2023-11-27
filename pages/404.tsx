import React, { useEffect } from "react";

const WrongPage = () => {
  useEffect(() => {
    const Header = document.querySelector("header");
    const Footer = document.querySelector("footer");
    if (Header !== null && Footer !== null) {
      Header.style.display = "none";
      Footer.style.display = "none";
    }
  }, []);

  return (
    <div
      className="all_wrap"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#131313",
      }}
    >
      <div className="wrap_404">
        <div title="404 Page Not Found">404 Page Not Found</div>
        <style jsx>
          {`
            .wrap_404 {
              display: flex;
              width: 100vw;
              height: 100vh;
              align-items: center;
              justify-content: center;
              margin: 0;
              background: rgba(196, 30, 32, 0.7);
              color: #fff;
              font-size: 96px;
              font-family: "Fira Mono", monospace;
              letter-spacing: -7px;
            }

            div {
              animation: glitch 1s linear infinite;
            }

            @keyframes glitch {
              2%,
              64% {
                transform: translate(2px, 0) skew(0deg);
              }
              4%,
              60% {
                transform: translate(-2px, 0) skew(0deg);
              }
              62% {
                transform: translate(0, 0) skew(5deg);
              }
            }

            div:before,
            div:after {
              content: attr(title);
              position: absolute;
              left: 0;
            }

            div:before {
              animation: glitchTop 1s linear infinite;
              clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
              -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
            }

            @keyframes glitchTop {
              2%,
              64% {
                transform: translate(2px, -2px);
              }
              4%,
              60% {
                transform: translate(-2px, 2px);
              }
              62% {
                transform: translate(13px, -1px) skew(-13deg);
              }
            }

            div:after {
              animation: glitchBotom 1.5s linear infinite;
              clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
              -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
            }

            @keyframes glitchBotom {
              2%,
              64% {
                transform: translate(-2px, 0);
              }
              4%,
              60% {
                transform: translate(-2px, 0);
              }
              62% {
                transform: translate(-22px, 5px) skew(21deg);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default WrongPage;
