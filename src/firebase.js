import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBpb8j-2mwkGIgQs1mXePZIEvh5liqzMC0",
  authDomain: "idobata-demo-3.firebaseapp.com",
  projectId: "idobata-demo-3",
  storageBucket: "idobata-demo-3.appspot.com",
  messagingSenderId: "896750112976",
  appId: "1:896750112976:web:4ce6743895a80b70590ed5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const messageRef = ref(database, 'messages');

export const pushMessage = ({ name, text }) => {
  const newRef = push(messageRef);
  set(newRef, { name, text });
}
