import firebase from 'firebase'
import env from 'app/env.json'

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE, 
  messagingSenderId: env.FIREBASE_SENDER_ID, 
  appId: env.FIREBASE_APP_ID, 
}

firebase.initializeApp(firebaseConfig);

export default firebase