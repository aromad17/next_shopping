interface RouterQuery {
  id: string;
  title: string;
  color: string[];
  price: number;
  path: string;
}

import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../loading";

export default function Detail({ params }: any) {
  const router: any = useRouter();

  const [pickedItem, setPickedItem]: any = useState();
  const [id, title] = params || [];
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  );
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(
    null
  );
  const sizeList = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/images");
      const results = response.data;

      const flatResults = results.flatMap((innerArray: any) => innerArray);
      const finalResults = flatResults.flatMap((innerArray: any) => innerArray);

      const pickItem = await finalResults.filter((item: any) => item.id == id);
      setPickedItem(pickItem[0]);
    })();
  }, []);

  return (
    <div style={{ paddingTop: "120px" }}>
      <Seo title={title} />
      {pickedItem ? (
        <div className="item_wrap">
          <p className="item_path">
            HOME
            {" > "}
            {pickedItem.category.toUpperCase()}
            {" > "}
            {pickedItem.title}
          </p>
          <div className="inner">
            <div className="item_image">
              <img src={pickedItem.path} alt={pickedItem.title} />
            </div>
            <div className="item_info">
              <div className="product">
                <h2>상품 정보</h2>
                <ul>
                  <li className="item_title">{pickedItem.title}</li>
                  <li className="item_price">
                    <h3>가격</h3>
                    {pickedItem.price}
                  </li>
                  <li className="item_color">
                    <h3>Color</h3>
                    {pickedItem.color &&
                      pickedItem.color.map((color: string, index: number) => (
                        <span
                          className={selectedColorIndex === index ? "on" : ""}
                          key={index}
                          style={{
                            backgroundColor: color,
                            display: "inline-block",
                          }}
                          onClick={() => setSelectedColorIndex(index)}
                        ></span>
                      ))}
                  </li>
                  <li className="item_size">
                    <h3>Size</h3>
                    <ul>
                      {sizeList.map((item: string, index: number) => (
                        <li
                          key={index}
                          className={selectedSizeIndex === index ? "on" : ""}
                          onClick={() => setSelectedSizeIndex(index)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="order_btns">
                <button>바로 주문 하기</button>
                <button>장바구니에 담기</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <style jsx>{`
        .item_wrap > .inner {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 80%;
          max-width: 1400px;
          min-width: 1200px;
        }

        .item_path {
          margin-bottom: 20px;
          font-size: 13px;
          color: #909090;
          text-align: right;
        }

        .item_image,
        .item_info {
          float: left;
          display: flex;
        }
        .item_image > img {
          max-height: 600px;
        }
        .item_info {
          justify-content: space-between;
          min-height: 600px;
          flex-direction: column;
          justify-contents: center;
          margin: auto 0 auto 50px;
          padding-left: 50px;
          border-left: 1px solid #909090;
        }

        .product {
          width: 100%;
        }
        .order_btns {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
        }

        .order_btns > button {
          width: 450px;
          padding: 10px;
          border: none;
          font-size: 16px;
        }

        .order_btns > button:first-child {
          background-color: #000;
          color: #fff;
        }
        .order_btns > button:last-child {
          background-color: #909090;
          color: #fff;
        }

        .item_info > .product > h2 {
          text-align: left;
          margin-top: 0;
        }

        .item_title {
          font-size: 30px;
          color: #1a1a1a;
          line-height: 30px;
          margin-bottom: 10px;
          padding-bottom: 20px;
          font-weight: 500;
          position: relative;
        }

        .item_price {
          font-size: 23px;
          color: #1a1a1a;
          margin-right: 10px;
          font-weight: 500;
        }

        .item_price > h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .item_color {
          margin-top: 20px;
        }
        .item_color > p {
          color: #1a1a1a;
          font-size: 14px;
        }
        .item_color > span {
          position: relative;
          left: 5px;
          margin-top: 15px;
          position: relative;
          width: 20px;
          height: 20px;
          margin-right: 25px;
          cursor: pointer;
        }
        .item_color > span::after {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          padding: 5px;
          border: 1px solid #909090;
        }

        .item_color > span.on::after {
          border: 3px solid #909090;
        }

        .item_size {
          margin-top: 20px;
        }
        .item_size > ul {
          margin-top: 10px;
        }

        .item_size > ul > li {
          display: inline-block;
          width: 30px;
          text-align: center;
          border: 1px solid #1a1a1a;
          padding: 5px;
          margin-right: 20px;
          background: transparent;
          color: #000;
          cursor: pointer;
        }

        .item_size > ul > li.on {
          background: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
