
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCpFSfxVaUC7_u2GPT4WYxI6b09Ia4rQCI",
    authDomain: "sell-and-purchase-store.firebaseapp.com",
    projectId: "sell-and-purchase-store",
    storageBucket: "sell-and-purchase-store.appspot.com",
    messagingSenderId: "889035789099",
    appId: "1:889035789099:web:b37f75be14ecca9f7aeb6e",
    measurementId: "G-MYTMW0102D"
  };
  
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const storage = firebase.storage();
