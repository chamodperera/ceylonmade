import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
console.log("auth: ", auth);

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(
      error,
      "Auth credential type: ",
      GoogleAuthProvider.credentialFromError(error)
    );
    return null;
  }
}

export async function accountSignOut() {
  try {
    signOut(auth);
  } catch (error) {
    console.error(error);
    alert("LOgout failed");
  }
}
