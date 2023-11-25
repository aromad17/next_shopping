import { NextApiRequest, NextApiResponse } from "next";

export interface Item {
  id: number;
  title: string;
  path: string;
  price: number;
  color: Array<string>;
  isWoman: boolean;
  isMan?: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imageList: Array<Array<Array<Item>>> = [
    // weekly
    [
      // woman
      [
        {
          id: 1,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/1.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/2.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/3.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/4.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/5.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/6.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 7,
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
          id: 1,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/1.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/2.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/3.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/4.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/5.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/6.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 7,
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
          id: 1,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/1.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/2.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/3.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/4.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/5.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/6.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/7.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 8,
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
          id: 1,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/1.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/2.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/3.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/4.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/5.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/6.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/7.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
        },
        {
          id: 8,
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
          id: 1,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/1.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: false,
        },
        {
          id: 2,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/2.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: false,
        },
        {
          id: 3,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/3.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: false,
        },
        {
          id: 4,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/4.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
          isMan: true,
        },
        {
          id: 5,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/5.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 6,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/6.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: false,
          isMan: false,
        },
        {
          id: 7,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/7.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 8,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/8.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 9,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/9.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 10,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/10.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 11,
          title: "(QR) [울블렌드] 카라넥 케이블 가디건_SPCKD4VW80",
          path: "/images/new/11.jpg",
          price: 66900,
          color: ["#ef5777", "#575fcf", "#d2dae2", "#0be881"],
          isWoman: true,
          isMan: true,
        },
        {
          id: 12,
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
      // lookbook
    ],
    // snap
    [],
    // 추가적인 배열들을 만들 수 있어요.
  ];

  res.status(200).json(imageList);
}
