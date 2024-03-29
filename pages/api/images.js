"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    var imageList = [
        // weekly
        [
            // woman
            [
                {
                    id: 1,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 2,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/2.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 3,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 4,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/4.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 5,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 6,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 7,
                    category: "weekly_woman",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/woman/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
            ],
            // man
            [
                {
                    id: 8,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 9,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/2.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 10,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 11,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/4.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 12,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 13,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 14,
                    category: "weekly_man",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/man/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
            ],
            // kids
            [
                {
                    id: 15,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 16,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/2.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 17,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 18,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/4.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 18,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 19,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 20,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 21,
                    category: "weekly_kids",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/kids/8.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
            ],
            // pajama
            [
                {
                    id: 22,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 23,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/2.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 24,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 25,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/4.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 26,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                },
                {
                    id: 27,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 28,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
                {
                    id: 29,
                    category: "weekly_pajama",
                    title: "파스텔 푸퍼_SPJPD4TG01",
                    path: "/images/weekly/pajama/8.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                },
            ],
        ],
        // new
        [
            [
                {
                    id: 30,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: false,
                },
                {
                    id: 31,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/2.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: false,
                },
                {
                    id: 32,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: false,
                },
                {
                    id: 33,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/4.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                    isMan: true,
                },
                {
                    id: 34,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 35,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                    isMan: false,
                },
                {
                    id: 36,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 37,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/8.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 38,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/9.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 39,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/10.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 40,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/11.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 41,
                    category: "new",
                    title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
                    path: "/images/new/12.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
            ],
        ],
        // style
        [
            [
                {
                    id: 42,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/1.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 43,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/2.jpg",
                    price: 66900,
                    color: ["#ef5777"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 44,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/3.jpg",
                    price: 66900,
                    color: ["#ef5777", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 45,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/4.jpg",
                    price: 66900,
                    color: ["#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                    isMan: true,
                },
                {
                    id: 46,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/5.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 47,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/6.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: false,
                    isMan: false,
                },
                {
                    id: 48,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/7.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 49,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/8.jpg",
                    price: 66900,
                    color: ["#575fcf", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 50,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/style/9.jpg",
                    price: 66900,
                    color: ["#ef5777", "#575fcf", "#d2dae2"],
                    isWoman: true,
                    isMan: true,
                },
                {
                    id: 51,
                    category: "style",
                    title: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
                    path: "/images/new/10.jpg",
                    price: 66900,
                    color: ["#ef5777", "#d2dae2", "#0be881"],
                    isWoman: true,
                    isMan: true,
                },
            ],
        ],
        // lookbook
        [
            [
                {
                    id: 52,
                    category: "lookbook",
                    title: "ROMACTIC Office",
                    path: "/images/lookbook/9.jpg",
                    subtitle: "일상을 바라보는 로맥틴한 시선",
                },
                {
                    id: 53,
                    category: "lookbook",
                    title: "FEEL YOUR ENERGY",
                    path: "/images/lookbook/1.jpg",
                    subtitle: "윈드브레이커와 다시 달린 계절",
                },
                {
                    id: 54,
                    category: "lookbook",
                    title: "MOOD OF MINIMAL",
                    path: "/images/lookbook/2.jpg",
                    subtitle: "차분함과 간결함으로 채운 미니멀룩",
                },
                {
                    id: 55,
                    category: "lookbook",
                    title: "PAJAMA OLYMPIAD",
                    path: "/images/lookbook/3.jpg",
                    subtitle: "집안에서 펼쳐지는 파자마 올림피아드",
                },
                {
                    id: 56,
                    category: "lookbook",
                    title: "WALK IN THE CAMPUS",
                    path: "/images/lookbook/4.jpg",
                    subtitle: "캠퍼스에서 펼쳐지는 아메리칸 캐주얼 모드",
                },
                {
                    id: 57,
                    category: "lookbook",
                    title: "CITYBOY LOVES DENIM",
                    path: "/images/lookbook/5.jpg",
                    subtitle: "도시 청춘을 위한 데님 컬렉션",
                },
                {
                    id: 58,
                    category: "lookbook",
                    title: "스파오 X 달빛천사",
                    path: "/images/lookbook/6.jpg",
                    subtitle: "영원한 아이돌 풀문의 18년만의 귀환",
                },
                {
                    id: 59,
                    category: "lookbook",
                    title: "WARM BREEZE SWEATER",
                    path: "/images/lookbook/7.jpg",
                    subtitle: "계절을 채우는 햇살과 바람을 입은 스웨터",
                },
                {
                    id: 60,
                    category: "lookbook",
                    title: "ROYAL BLUE SPORTS CLUB",
                    path: "/images/lookbook/8.jpg",
                    subtitle: "코트와 일상에서 빛나는 테니스 플레이어 룩",
                },
            ],
        ],
    ];
    res.status(200).json(imageList);
}
exports.default = handler;
