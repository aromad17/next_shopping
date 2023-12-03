import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Item } from "../../pages/api/images";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewOne({ data }: any, { winWid }: any) {
  const [newList, setNewList] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    setNewList(data[0]);
  }, []);
  const router = useRouter();

  const onClick = (
    id: number,
    category: string,
    title: string,
    path: string,
    price: number,
    color: string[]
  ) => {
    router.push(
      {
        pathname: `/items/${id}/${title}`,
        query: {
          id,
          category,
          title,
          color,
          price,
          path,
        },
      },
      `/items/${id}/${title}`
    );
  };
  return (
    <>
      <div className="new_wrap cboth">
        <h2>신상품</h2>
        <div className="new_slide_wrap">
          {newList ? (
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              style={{ width: "90%", minWidth: "1200px", position: "unset" }}
              loop={true}
            >
              {newList.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="new_item"
                  onClick={(e): void => {
                    e.preventDefault();
                    onClick(
                      item.id,
                      item.category,
                      item.title,
                      item.path,
                      item.price,
                      item.color
                    );
                  }}
                >
                  <Link
                    legacyBehavior
                    href={{
                      pathname: `/items/${item.id}/${item.title}`,
                      query: {
                        id: item.id,
                        category: item.category,
                        title: item.title,
                        color: item.color,
                        price: item.price,
                        path: item.path,
                      },
                    }}
                    as={`/items/${item.id}/${item.title}`}
                  >
                    <a>
                      <div className="item_img">
                        <img src={item.path} alt={item.title} />
                      </div>
                      <div className="item_title">{item.title}</div>
                      <div className="item_price">
                        {item.price.toLocaleString()}
                      </div>
                      <div className="item_color">
                        {item.color.map((color, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: color,
                              display: "inline-block",
                              width: "10px",
                              height: "10px",
                              marginRight: "5px",
                            }}
                          ></span>
                        ))}
                      </div>
                      <div className={`isWoman `}>
                        {item.isWoman
                          ? "여성용"
                          : item.isMan
                          ? "남성용"
                          : item.isMan && item.isWoman
                          ? ""
                          : "남녀공용"}
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
      <style jsx>{`
        /* new */
        .new_slide_wrap {
          position: relative;
          width: 100%;
        }
        .item_img {
          position: relative;
        }

        .item_img::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: #fff;
          opacity: 0;
        }

        .item_img:hover::after {
          opacity: 0.2;
        }

        .item_img img {
          width: 100%;
        }

        .item_title {
          font-size: 16px;
          line-height: 22px;
          color: #1a1a1a;
          margin: 20px 0 12px;
        }
        .item_price {
          font-size: 22px;
          line-height: 18px;
          color: #1a1a1a;
          font-weight: 500;
        }

        .item_color {
          margin-top: 10px;
        }
        .isWoman {
          display: inline-block;
          font-size: 10px;
          margin: 10px 0;
          background-color: #000;
          color: #fff;
          padding: 2px;
          width: 40px;
          text-align: center;
        }
        .isWoman.none {
          display: none;
        }
      `}</style>
    </>
  );
}
