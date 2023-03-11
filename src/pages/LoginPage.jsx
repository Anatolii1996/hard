import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { provider } from "../firebase";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
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

  const authorization = () => {
    signInWithPopup(auth, provider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error(e));
  };

  return (
    <div className="main">
      <div className="auth_wrap">
        <button
         onClick={authorization}
          className="button_wrap"
        >
          <FcGoogle />
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
