import { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function ClientDash(userCreds) {
  const [displayName, setDisplayName] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(auth.currentUser.displayName);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return <>{auth != null && <div> Welcome dear Client: {displayName} </div>}</>;
}
