import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { asignarRolAdmin } from './firebaseAdminUtils.js';

const firebaseConfig = {
  apiKey: "AIzaSyBhSUhdGAb9DJw87vSp33CGk7VnSsRxQ60",
  authDomain: "amalogistic-d2a79.firebaseapp.com",
  databaseURL: "https://amalogistic-d2a79-default-rtdb.firebaseio.com",
  projectId: "amalogistic-d2a79",
  storageBucket: "amalogistic-d2a79.firebasestorage.app",
  messagingSenderId: "605672630537",
  appId: "1:605672630537:web:18f7ddb2ad2d23c7becbd8",
  measurementId: "G-74F64237PN"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const adminUidParaAsignar = "MIdHleU2sKQ3x33E2AMstzYqlYj2";
asignarRolAdmin(adminUidParaAsignar);
