import { getFirestore } from "firebase/firestore";
import {app} from "../config/firebase";
import { getAuth, signInWithCustomToken } from "firebase/auth";

import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export const useDetails = () => {
    const { getToken, isLoaded, isSignedIn } = useAuth();
    const [details, setDetails] =  useState([]);
    const [error, setError] = useState(null);

    const db = getFirestore(app);


    useEffect(() => {
        const signInWithClerk = async () => {
          const auth = getAuth();
          const token = await getToken({ template: "integration_firebase" });
          const userCredentials = await signInWithCustomToken(auth, token);
     
          /**
           * The userCredentials.user object will call the methods of
           * the Firebase platform as an authenticated user.
           */
          console.log("user ::", userCredentials.user);
        };
     
        signInWithClerk();
      }, []);
}