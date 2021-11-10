import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Firebase/FIrebase.initialize";

initialize();

const useFirebase = () => {
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  // const [error, setError] = useState("");
  const [isloding, setisLoding] = useState(true);
  const googleLogin = () => {
    setisLoding(true);
    return signInWithPopup(auth, Googleprovider);
  };

  const logOut = () => {
    setisLoding(true);
    signOut(auth).then(() => {
      setUser({});
    });
    setisLoding(false);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setisLoding(false);
    });
  }, []);

  return {
    user,
    isloding,
    logOut,
    googleLogin,
  };
};
export default useFirebase;
