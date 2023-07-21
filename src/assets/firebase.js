import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDdQyziVFB5ZwLtA0S44ZxAmVWUYGx-XOE",
    authDomain: "quora-clone-390418.firebaseapp.com",
    databaseURL: "https://quora-clone-390418-default-rtdb.firebaseio.com",
    projectId: "quora-clone-390418",
    storageBucket: "quora-clone-390418.appspot.com",
    messagingSenderId: "497854168642",
    appId: "1:497854168642:web:139b9e3c1a46e031d577db", 
    databaseURL: "https://quora-clone-390418-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);