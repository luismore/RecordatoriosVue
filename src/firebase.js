import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { conexion } from "../firebaseAPIKey";

const firebaseConfig = (conexion);

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const Recordatorios = collection(db, "Recordatorios");
