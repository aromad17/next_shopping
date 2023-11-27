// RouterQuery 타입 정의
interface RouterQuery {
  id: string;
  title: string;
  color: string[];
  price: number;
  path: string;
}

// Detail 컴포넌트에서 사용하는 코드
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }: any) {
  const router: any = useRouter();
  const [itemInfo, setItemInfo] = useState<RouterQuery | undefined>(undefined);

  useEffect(() => {
    if (router.query) {
      setItemInfo(router.query);
    }
  }, [router.query]);

  const [title] = params || [];
  return (
    <div style={{ paddingTop: "140px" }}>
      <Seo title={title} />
      {itemInfo ? (
        <div className="item_wrap">
          <div className="inner">
            <div className="item_image">
              <img src={itemInfo.path} alt={itemInfo.title} />
            </div>
            <div className="item_info">
              <h2>Product Info</h2>
              <ul>
                <li className="item_title">{itemInfo.title}</li>
                <li className="item_price">{itemInfo.price}</li>
                <li className="item_color">
                  {itemInfo.color &&
                    itemInfo.color.map((color, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: color,
                          display: "inline-block",
                          width: "10px",
                          height: "10px",
                          marginRight: "5px",
                        }}
                      ></span>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <style jsx>{`
        .item_image,
        .item_info {
          float: left;
        }
        .item_image > img {
          max-height: 600px;
        }
        .item_info {
          display: flex;
          flex-direction: column;
          justify-contents: center;
          padding-left: 50px;
        }
        .item_info > h2 {
          text-align: left;
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
