import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { provider } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        setUser(maybeUser);
      }
    });
    return unsubscribe;
  }, [auth]);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
        if (maybeUser) {
          navigate("/main");
        }
      });
  }, [])

  const authorization = () => {
    signInWithPopup(auth, provider)
      .then((credentials) => setUser(credentials.user))
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
