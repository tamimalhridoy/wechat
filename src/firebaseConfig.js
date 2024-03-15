
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAekTXCqMBFa8OMlQtWphify_JHkgmygSs",
  authDomain: "wechat-669e7.firebaseapp.com",
  projectId: "wechat-669e7",
  storageBucket: "wechat-669e7.appspot.com",
  messagingSenderId: "393635550710",
  appId: "1:393635550710:web:cb740b056c66f145d063d7"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const auth = getAuth(app);


export default database;