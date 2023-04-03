import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBvR9ZGAR__PswSUPBr7NvBZZoOodRnwNI",
  authDomain: "projeto-60-4958c.firebaseapp.com",
  databaseURL: "https://projeto-60-4958c-default-rtdb.firebaseio.com",
  projectId: "projeto-60-4958c",
  storageBucket: "projeto-60-4958c.appspot.com",
  messagingSenderId: "1022440651822",
  appId: "1:1022440651822:web:6181d1e27159418425b3bf"
};

  firebase.initializeApp(firebaseConfig); 
  export default firebase.database()
 

  