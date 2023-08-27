import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import ReactObserver from "react-event-observer";

export const observer = ReactObserver();
const auth = getAuth(app);

export async function getCurrentUser() {
  return auth.currentUser;
}

auth.onAuthStateChanged((user) => {
  observer.publish("authStateChanged", user);
});
