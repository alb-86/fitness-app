import {
  ActionCodeSettings,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const sendMagicLink = (email: string) => {
  const actionCodeSettings: ActionCodeSettings = {
    // Replace with your real deep-link/domain configured in Firebase Auth
    url: "https://your-app-domain.com/finishSignIn",
    handleCodeInApp: true,
  };

  return sendSignInLinkToEmail(auth, email, actionCodeSettings);
};

export const completeMagicLinkSignIn = (email: string, link: string) => {
  if (!isSignInWithEmailLink(auth, link)) {
    throw new Error("Invalid sign-in link.");
  }
  return signInWithEmailLink(auth, email, link);
};

export const logout = () => {
  return signOut(auth);
};
