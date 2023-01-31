
        // Import the functions you need from the SDKs you need
      
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
      
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
      
        // TODO: Add SDKs for Firebase products that you want to use
      
        // https://firebase.google.com/docs/web/setup#available-libraries
      
      
        // Your web app's Firebase configuration
      
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      
        const firebaseConfig = {
      
          apiKey: "AIzaSyBpeIjh-0LfWo98HKTvEsjbKmA2JvoFDHc",
      
          authDomain: "cornhole-76b89.firebaseapp.com",
      
          databaseURL: "https://cornhole-76b89-default-rtdb.firebaseio.com",
      
          projectId: "cornhole-76b89",
      
          storageBucket: "cornhole-76b89.appspot.com",
      
          messagingSenderId: "503250039073",
      
          appId: "1:503250039073:web:7a69e374d99d47469f0e60",
      
          measurementId: "G-M0SWJK2WQB"
      
        };
      
      
        // Initialize Firebase
      
        const app = initializeApp(firebaseConfig);
      
        const analytics = getAnalytics(app);
      