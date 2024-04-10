import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAdcYTZDjghmA-hMsZYiy8BOZS1FqrQmq0",
    authDomain: "myapp4-9dbc9.firebaseapp.com",
    projectId: "myapp4-9dbc9",
    storageBucket: "myapp4-9dbc9.appspot.com",
    messagingSenderId: "331320342307",
    appId: "1:331320342307:web:4206d98d9dd0a7b36dfe96",
    measurementId: "G-Z8NWEYSE4R"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)