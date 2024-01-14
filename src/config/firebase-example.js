import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//add the below values to initiate your project with firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);