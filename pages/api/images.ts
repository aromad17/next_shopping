import { NextApiRequest, NextApiResponse } from "next";

export interface Item {
  id: number;
  title: string;
  path: string;
  price: number;
  isWoman: boolean;
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
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/2.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/3.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/4.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/5.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/6.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/woman/7.jpg",
          price: 66900,
          isWoman: false,
        },
      ],
      // man
      [
        {
          id: 1,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/1.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/2.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/3.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/4.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/5.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/6.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/man/7.jpg",
          price: 66900,
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
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/2.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/3.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/4.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/5.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/6.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/7.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 8,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/kids/8.jpg",
          price: 66900,
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
          isWoman: true,
        },
        {
          id: 2,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/2.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 3,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/3.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 4,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/4.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 5,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/5.jpg",
          price: 66900,
          isWoman: true,
        },
        {
          id: 6,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/6.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 7,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/7.jpg",
          price: 66900,
          isWoman: false,
        },
        {
          id: 8,
          title: "파스텔 푸퍼_SPJPD4TG01",
          path: "/images/weekly/pajama/8.jpg",
          price: 66900,
          isWoman: false,
        },
      ],
    ],
    // new
    [
      // 다른 배열 안에 오브젝트들 추가
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
