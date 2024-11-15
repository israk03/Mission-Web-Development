import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const name = "Israk";

  //   create user (Register.jsx)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user (Login.jsx)
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  //   on state change observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User: ", currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    name,
    user,
    createUser,
    logIn,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
