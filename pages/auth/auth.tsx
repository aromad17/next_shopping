import Seo from "@/components/Seo";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGoogle, FaGithub } from "react-icons/fa";
export default function Auth() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const router = useRouter();

  const onSocial = async (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    const {
      target: { name },
    } = e;

    let provider: any;
    if (name === "google") {
      //구글눌렀을때
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      //깃헙눌렀을때
      provider = new GithubAuthProvider();
    }
    try {
      const data = await signInWithPopup(auth, provider);
      console.log("data->", data);
      router.push("/");
    } catch (error: any) {
      setError(error);
    }
  };
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
      signInWithEmailAndPassword(auth, userId, userPw).then(
        (userCredential) => {
          const user = userCredential.user;
          router.push("/");
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="auth_wrap" style={{ paddingTop: "130px" }}>
      <Seo title="로그인" />
      <div className="auth">
        <img src="/images/top_logo_pc.png" />
        <form onSubmit={onSubmit}>
          <fieldset>
            <h2>로그인</h2>
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
            <input className="input_submit" type="submit" value="로그인하기" />
            <p>
              계정이 없다면 ?&nbsp;
              <Link legacyBehavior href="/auth/join">
                <a>회원 가입하러 가기</a>
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="social">
          <button className="google_btn" name="google" onClick={onSocial}>
            <FaGoogle className="social_icon" />
            Continue With GOOGLE Account
          </button>
          <button className="github_btn" name="github" onClick={onSocial}>
            <FaGithub className="social_icon" />
            Continue With GITHUB Account
          </button>
        </div>
      </div>
      <style jsx>{`
        .auth_wrap {
          width: 100%;
        }
        .auth {
          padding: 50px 0;
        }

        .auth > img {
          display: block;
          margin: 0 auto;
        }
        .auth > form {
          width: 100%;
          max-width: 1200px;
          min-width: 300px;
          margin: 0 auto;
        }
        .auth > form > fieldset {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .auth > form > fieldset > h2 {
          margin: 10px 0 30px;
        }

        .auth > form > fieldset > input,
        .auth > form > fieldset > p {
          width: 30%;
          min-width: 200px;
          height: 50px;
          margin: 0 auto;
        }
        .auth > form > fieldset > input {
          padding: 5px;
          box-sizing: border-box;
        }
        .auth > form > fieldset > input.input_submit {
          color: white;
          background-color: #c41e20;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .auth > form > fieldset > p {
          margin-top: 10px;
          text-align: center;
        }
        .auth > form > fieldset > p > a {
          display: block;
          line-height: 200%;
          color: #c41e20;
          font-weight: 600;
        }
        .social {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          width: 100%;
          max-width: 1200px;
          min-width: 300px;
          margin: 30px auto 0;
        }

        .social > button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 30%;
          min-width: 200px;
          height: 40px;
          margin: 0 auto;
          background-color: #fff;
          transition: all 0.2s linear 0s;
          cursor: pointer;
        }

        .social > button:hover {
          color: white;
          background-color: #c41e20;
          border: 1px solid #c41e20;
        }
      `}</style>
    </div>
  );
}
