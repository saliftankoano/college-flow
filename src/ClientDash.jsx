import { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import BackNav from "./components/BackNav";
import Footer from "./components/Footer";

export default function ClientDash() {
  const [displayName, setDisplayName] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(name);
      }
    });
  }, []);

  if (!displayName) {
    return null;
  }
  return (
    <>
      <div className="bg-white h-full">
        <BackNav />
        {auth != null && (
          <h1 className="text-4xl"> Welcome dear Client: {displayName} </h1>
        )}
      </div>
      <Footer />
    </>
  );
}
