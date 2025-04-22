import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from './firebase-config'; // Asegúrate de que la ruta a tu configuración sea correcta

const db = getDatabase(firebaseApp);

export const asignarRolAdmin = (uid) => {
  set(ref(db, `usuarios/${uid}/role`), "admin")
    .then(() => {
      console.log(`Rol 'admin' asignado correctamente a usuario con UID: ${uid}`);
    })
    .catch((error) => {
      console.error("Error al asignar el rol 'admin': ", error);
    });
};
