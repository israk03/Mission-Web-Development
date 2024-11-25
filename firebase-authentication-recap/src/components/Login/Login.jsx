import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        console.log(result.user.photoURL);
        setUser(result.user);
      })

      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign out successfully");
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <button
          onClick={handleSignOut}
          className="bg-slate-500 p-4 ml-5 rounded-md text-white"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="bg-slate-500 p-4 rounded-md text-white"
        >
          LogIn with Google.
        </button>
      )}

      {user && (
        <div className="m-8">
          <h3 className="text-2xl">Hello {user.displayName}!</h3>
          <p>{user.email}</p>
          <img
            className="h-36 w-36 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
