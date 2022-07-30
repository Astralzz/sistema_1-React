// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  getDocs,
  setDoc,
  getFirestore,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Función
function firebaseConfig() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyBA5acA6I8CROFDxDcVxmBYLR21BdtMC7M",
    authDomain: "sistema1-de1b2.firebaseapp.com",
    projectId: "sistema1-de1b2",
    storageBucket: "sistema1-de1b2.appspot.com",
    messagingSenderId: "964820079161",
    appId: "1:964820079161:web:828807b4be24edddfa73e8",
    measurementId: "G-ZWXT3Y4B2Z",
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}

//Registrar
function firebaseRegistrarUsuarios(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(
    (credencialesDeUsuario) => {}
  );
}

//Iniciar sesión
async function firebaseIniciarSesion(email, password) {
  try {
    //Guardamos el resultado
    const credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return true;
  } catch (e) {
    return false;
  }
}

//Buscar datos
async function firebaseBuscar(coleccionABuscar) {
  //lista
  let lista = [];

  //lamamos a la colección
  const consulta = collection(getFirestore(), coleccionABuscar);
  //obtenemos el resultado
  const resultado = await getDocs(consulta);
  //recorremos
  resultado.forEach((documento) => {
    //Devuelve los datos ({email: ejemplo@gmail.com, Telefono:85255})
    let objeto = documento.data();

    //Devuelve el id (1,2,3)
    objeto.id = documento.id;

    //lo agregamos a la lista
    lista.push(objeto);
  });
  return lista;
}

//Guardar dato
function firebaseCrear(coleccion, objeto) {
  //creamos un id automáticamente
  objeto.id = uuidv4();

  console.log("La id es: " + objeto.id);

  //Agregamos el objeto a la BD
  const referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}

//Eliminar dato
async function firebaseEliminar(coleccion, id) {
  //Eliminamos
  const referencia = doc(getFirestore(), coleccion, id);
  await deleteDoc(referencia);
}

//Exportamos
export {
  firebaseConfig,
  firebaseRegistrarUsuarios,
  firebaseIniciarSesion,
  firebaseBuscar,
  firebaseCrear,
  firebaseEliminar,
};
