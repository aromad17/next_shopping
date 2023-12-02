import Seo, { TitleName } from "@/components/Seo";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Join() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const router = useRouter();
  const onChangeId = (e: any) => {
    setUserId(e.target.value);
  };

  const onChangePw = (e: any) => {
    setUserPw(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userId, userPw).then(
        (userCredential) => {
          const user = userCredential.user;
          router.push("/");
          alert("환영합니다.");
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="join_wrap" style={{ paddingTop: "130px" }}>
      <Seo title="회원가입" />
      <div className="join">
        <img src="/images/top_logo_pc.png" />
        <form onSubmit={onSubmit}>
          <fieldset>
            <h2>회원가입</h2>
            {/* 이메일 입력 */}
            <input
              className="input_id"
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={userId}
              onChange={onChangeId}
            />

            {/* 비번 */}
            <input
              className="input_pw"
              autoComplete="current-password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={userPw}
              onChange={onChangePw}
            />

            <input
              className="input_submit"
              type="submit"
              value="위 내용으로 가입하기"
            />
          </fieldset>
        </form>
        <span
          style={{
            display: "block",
            margin: "50px auto 0",
            opacity: "0.5",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          이메일주소는 이메일 형식이라면 아무렇게나 써도 가입이 가능합니다.
        </span>
        <span
          style={{
            display: "block",
            opacity: "0.5",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          ex) lkasjd@aslkdj.com
        </span>
      </div>
      <style jsx>{`
        .auth_wrap {
          width: 100%;
        }
        .join {
          padding: 50px 0;
        }

        .join > img {
          display: block;
          margin: 0 auto;
        }
        .join > form {
          width: 100%;
          max-width: 1200px;
          min-width: 300px;
          margin: 0 auto;
        }
        .join > form > fieldset {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .join > form > fieldset > h2 {
          margin: 10px 0 30px;
        }

        .join > form > fieldset > input,
        .join > form > fieldset > p {
          width: 30%;
          min-width: 200px;
          height: 50px;
          margin: 0 auto;
        }
        .join > form > fieldset > input {
          padding: 5px;
          box-sizing: border-box;
        }
        .join > form > fieldset > input.input_submit {
          color: white;
          background-color: #c41e20;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
