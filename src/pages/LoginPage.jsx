import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { provider } from "../firebase";

const LoginPage = () => {
    const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
 

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, provider).then((credentials) =>
        setUser(credentials.user).catch((e) => console.error(e))
      );
    });
    return unsub;
  }, [auth]);

  return user ? <>{user.displayName}</> : <>loading</>;
};
export default LoginPage;
