import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.PROJECT_ID + ".firebaseapp.com",
    databaseURL: "https://" + process.env.PROJECT_ID + ".firebaseio.com",
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.PROJECT_ID + ".appspot.com",
    messagingSenderId: process.env.MESSAGE_SENDER_ID
  })
}

export default firebase