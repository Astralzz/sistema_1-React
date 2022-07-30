import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { firebaseIniciarSesion } from "../FirebaseUtil";
import { async } from "@firebase/util";

//Inicio de sesión
export default function LoginMain() {
  //Variables
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //Registrar Usuarios
  const IniciarSesion = async () => {
    if (await firebaseIniciarSesion(Email, Password)) {
      swal({
        title: "ÉXITO!",
        text: "Usuario encontrado",
        icon: "success",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "ERROR!",
        text: "Usuario NO encontrado",
        icon: "error",
        button: "Aceptar",
      });
    }
  };

  //Obtenemos la navegación
  const Navegador = useNavigate();

  return (
    <div className="DivRegistro">
      <h1>Iniciar sesión</h1>
      {/* Email */}
      <div className="ComponentesRe">
        <label htmlFor="Email">
          Email:
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Ejemplo@gmail.com"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      {/* Contraseña */}
      <div className="ComponentesRe">
        <label htmlFor="Password">
          Contraseña:
          <input
            type="password"
            name="Pass"
            id="Pass"
            placeholder="*********"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      {/* Boton de registro */}
      <div className="ComponentesRe">
        <button onClick={IniciarSesion} type="submit">
          Acceder
        </button>
        <br />
        <button onClick={() => Navegador("/")} type="submit">
          Volver a la pagina principal
        </button>
      </div>
    </div>
  );
}
