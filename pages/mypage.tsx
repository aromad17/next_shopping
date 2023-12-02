import Seo, { TitleName } from "@/components/Seo";
import { getAuth, updateProfile, signOut, deleteUser } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Mypage() {
  const [userData, setUserData]: any = useState();
  const auth = getAuth();
  const router = useRouter();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
      } else {
        console.log("no - user");
      }
    });
    return () => unsubscribe();
  }, []);

  const onLogOut = () => {
    auth
      .signOut()
      .then(() => {
        if (typeof window !== "undefined") {
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("로그아웃 오류:", error);
      });
  };

  const onDelete = () => {
    const user: any = auth.currentUser;
    deleteUser(user)
      .then(() => {
        alert("그 동안 스파오몰을 이용해주셔서 감사했습니다.");
        router.push("/");
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mypage_wrap" style={{ paddingTop: "130px" }}>
      <Seo title="마이페이지" />
      <div className="mypage">
        <h2>MY PAGE</h2>
        {userData && userData !== undefined ? (
          <>
            <p>
              <img
                src={
                  userData.photoURL ? userData.photoURL : "/images/avatar.png"
                }
              />
              {userData.displayName || userData.email}님,
              <br />
              스파오몰을 이용해 주셔서 감사합니다....
            </p>
            <div className="order_list">
              <h3>최근 주문내역</h3>
              <table className="mypage_table">
                <caption>최근 주문 내역</caption>
                <thead>
                  <tr>
                    <th>주문일자[주문번호]</th>
                    <th></th>
                    <th>상품정보</th>
                    <th>수량</th>
                    <th>주문금액</th>
                    <th>주문상태</th>
                    <th>취소/교환/반품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={7}>주문 내역이 없습니다.</td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="mypage_account">
              <button className="logout" onClick={onLogOut}>
                로그아웃
              </button>
              <button className="delete" onClick={onDelete}>
                계정 탈퇴
              </button>
            </div>
          </>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
      <style jsx>{`
        .mypage {
          width: 90%;
          max-width: 1440px;
          min-width: 1200px;
          margin: 0 auto;
          text-transform: uppercase;
        }

        .mypage > p {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 50%;
          margin: 0 auto;
          align-items: center;
          font-weight: 600;
          text-align: center;
          line-height: 24px;
        }

        .mypage > p > img {
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .order_list {
          width: 100%;
          margin-top: 100px;
        }

        .order_list > h3 {
          font-size: 18px;
          font-weight: 600;
          padding: 20px 0;
        }

        .mypage_table {
          width: 100%;
          border-top: 2px solid #1b1b1b;
        }
        .mypage_table > caption {
          display: none;
        }
        .mypage_table thead tr {
          border-bottom: 1px solid #9c9c9c;
        }
        .mypage_table thead tr th {
          padding: 15px 0;
          opacity: 0.7;
        }

        .mypage_table tbody tr td {
          text-align: center;
          padding: 50px 0;
        }

        .mypage_account {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 30px;
          margin-top: 80px;
        }

        .logout,
        .delete {
          width: 100px;
          padding: 20px 10px;
          background-color: #c41e20;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
