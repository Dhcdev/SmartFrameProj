import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyClGf1aAm47Wehslao4YAwpxJQsiaN8lfA",
    authDomain: "smartframe-me-bbb35.firebaseapp.com",
    databaseURL: "https://smartframe-me-bbb35.firebaseio.com",
    projectId: "smartframe-me-bbb35",
    storageBucket: "smartframe-me-bbb35.appspot.com",
    messagingSenderId: "306887962863",
    appId: "1:306887962863:web:874e45827a8591040beb1a"
  }




firebase.initializeApp(firebaseConfig)
export default firebase