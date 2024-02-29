import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBixTIlRcQimL-imIzyDlom9Y3yfcHOs2Q",
  authDomain: "github-explorer-v1.firebaseapp.com",
  projectId: "github-explorer-v1",
  storageBucket: "github-explorer-v1.appspot.com",
  messagingSenderId: "882276974460",
  appId: "1:882276974460:web:ec6743a3a49f9011ddeef9",
  measurementId: "G-FS1XD0S25C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);