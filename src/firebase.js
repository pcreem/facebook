import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDrpk_OQdhvBu_U8tAPsS54-gSBmPLUzao",
  authDomain: "facebook-clone-79c45.firebaseapp.com",
  databaseURL: "https://facebook-clone-79c45.firebaseio.com",
  projectId: "facebook-clone-79c45",
  storageBucket: "facebook-clone-79c45.appspot.com",
  messagingSenderId: "402607891367",
  appId: "1:402607891367:web:509f188185be320f454c82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db