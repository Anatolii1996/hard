/* eslint-disable */
import { useEffect } from "react";
import {  signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { provider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
     auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        navigate("/chat/main");
      }
    });
  }, []);

  const authorization = () => {
    signInWithPopup(auth, provider)
      .catch((e) => console.error(e));
  };

  return (
    <div className="main">
      <div className="auth_wrap">
        <button onClick={authorization} className="button_wrap">
          <FcGoogle />
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
