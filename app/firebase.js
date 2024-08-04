import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyCdrb4529dvRkjkujqjCFtkFcnn0hLBncU",
//   authDomain: "pantry-tracker-app-ce2d4.firebaseapp.com",
//   projectId: "pantry-tracker-app-ce2d4",
//   storageBucket: "pantry-tracker-app-ce2d4.appspot.com",
//   messagingSenderId: "504840144002",
//   appId: "1:504840144002:web:8bf11af3339d97f99e609b"
//   };

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

 const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app);
 export { firestore };

