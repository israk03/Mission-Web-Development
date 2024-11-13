import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGoogleSignOUT = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully.");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleGoogleSignOUT}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign In</button>
      )}

      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}
