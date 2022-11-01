import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA6NOKAM674FuA1NvtJAKjOpHfa-XMBhiE",
  authDomain: "auth-firs.firebaseapp.com",
  projectId: "auth-firs",
  storageBucket: "auth-firs.appspot.com",
  messagingSenderId: "168845983522",
  appId: "1:168845983522:web:0f9a388b31f1265a2c2f7b"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)