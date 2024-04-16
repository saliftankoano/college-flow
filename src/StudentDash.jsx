import { useState, useEffect } from "react";
import ServiceCard from "./components/ServiceCard";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function StudentDash() {
  const [displayName, setDisplayName] = useState("Not loged in ");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(name);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <>
      {auth && (
        <div>
          <div> Welcome dear student : {displayName} </div>
          <ServiceCard />
        </div>
      )}
    </>
  );
}
