
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Get a list of cities from your database
export async function getAccomadation(db) {
  const citiesCol = collection(db, 'accomadation');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => {
    const id = doc.id
    const data = doc.data()
    return { id, ...data };
  })

  return cityList;
}

export async function setUserData(db, id, data) {
  console.log(id, data)
  // const usersCol = collection(db, 'users');
  // set(ref(db, 'users/' + id), data);
}

export async function getUserData(db, id) {
  
}

// Get a list of cities from your database
export async function getUsers(db) {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => {
    const id = doc.id
    const data = doc.data()
    return { id, ...data };
  })

  return cityList;
}

export const signOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.\
    return true;
  }).catch((error) => {
    // An error happened.
  });
}



