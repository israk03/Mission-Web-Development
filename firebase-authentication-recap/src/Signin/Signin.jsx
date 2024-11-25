import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config";

export default function Signin() {
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        className="bg-blue-500 p-4 rounded-md text-white"
      >
        SignIn with Google.
      </button>
    </div>
  );
}
