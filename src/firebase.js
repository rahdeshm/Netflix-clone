import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAt_ZF9TRwQurTlGpOY_dZL9ei3usJgSgc",
    authDomain: "netflix-clone-45bc5.firebaseapp.com",
    projectId: "netflix-clone-45bc5",
    storageBucket: "netflix-clone-45bc5.appspot.com",
    messagingSenderId: "195146399322",
    appId: "1:195146399322:web:1718af35abe00f30b72263"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;