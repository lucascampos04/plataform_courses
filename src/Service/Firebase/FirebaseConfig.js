import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBm9cNIB6pJ8EUmuxkT2Y2v1YtF7xmQyIk",
  authDomain: "capacitampeclone.firebaseapp.com",
  projectId: "capacitampeclone",
  storageBucket: "capacitampeclone.appspot.com",
  messagingSenderId: "88136859636",
  appId: "1:88136859636:web:82dcf2f65e803fb16ec3a1",
  measurementId: "G-TZ1GY45CK5"
};

export const AppConfigFirebase = initializeApp(firebaseConfig);