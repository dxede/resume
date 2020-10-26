import firebase from 'firebase/app';
import 'firebase/analytics';

const env = process.env;

export default function configureApp() {
  if (!env.REACT_APP_IS_DEV_ENV) {
    configureFirebase();
  }
}

function configureFirebase () {
  firebase.initializeApp({
    apiKey: env.REACT_APP_FIREBASE_apiKey,
    authDomain: env.REACT_APP_FIREBASE_authDomain,
    databaseURL: env.REACT_APP_FIREBASE_databaseURL,
    projectId: env.REACT_APP_FIREBASE_projectId,
    storageBucket: env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: env.REACT_APP_FIREBASE_messagingSenderId,
    appId: env.REACT_APP_FIREBASE_appId,
    measurementId: env.REACT_APP_FIREBASE_measurementId,
  });
  
  firebase.analytics();
}