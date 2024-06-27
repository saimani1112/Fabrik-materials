import { initializeApp } from "@firebase/app";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcwt49_muMVkG3f5nIX8RFTJY6k6fLsck",
  authDomain: "materials-7b166.firebaseapp.com",
  projectId: "materials-7b166",
  storageBucket: "materials-7b166.appspot.com",
  messagingSenderId: "711116009348",
  appId: "1:711116009348:web:72942d6f33ae6e6fa277d1",
  measurementId: "G-MK2RSPTNHT"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "materials-7b166.appspot.com");
export { storage };