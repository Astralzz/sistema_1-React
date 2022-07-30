import "./Registro.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import { firebaseCrear } from "../FirebaseUtil";

//PESTAÑA DE REGISTRO
export default function RegistrarClienteMain() {
  //Variables
  const [Nombre, setNombre] = useState("");
  const [Apellido_P, setApellido_P] = useState("");
  const [Apellido_M, setApellido_M] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Email, setEmail] = useState("");

  //Registrar Usuarios
  const RegistrarClientes = () => {
    //Obtenemos el cliente
    const cliente = {
      nombre: Nombre,
      apellido_p: Apellido_P,
      apellido_m: Apellido_M,
      telefono: Telefono,
      email: Email,
    };

    firebaseCrear("clientes", cliente);
    swal({
      title: "ÉXITO!",
      text: "El cliente se a creado correctamente",
      icon: "success",
      button: "Aceptar",
    });
    Navegador("/tablas/clientes");
  };

  //Obtenemos la navegación
  const Navegador = useNavigate();

  return (
    <div className="DivRegistro">
      <h1>Registro de clientes</h1>
      {/* Nombre */}
      <div className="ComponentesRe">
        <label htmlFor="Nombre">
          Nombre:
          <input
            type="text"
            name="Nombre"
            id="Nombre"
            placeholder="Jesus Manuel"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
      </div>
      {/* Apellidos */}
      <div className="ComponentesRe">
        <label htmlFor="Apellidos">
          Apellidos:
          <input
            type="text"
            name="Apellido_P"
            id="Apellido_P"
            placeholder="Paterno"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setApellido_P(event.target.value)}
          />
          <input
            type="text"
            name="Apellido_M"
            id="Apellido_M"
            placeholder="Materno"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setApellido_M(event.target.value)}
          />
        </label>
      </div>
      {/* Teléfono */}
      <div className="ComponentesRe">
        <label htmlFor="Telefono">
          Teléfono:
          <input
            type="text"
            name="Telefono"
            id="Telefono"
            placeholder="0123456789"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            required="required"
            onChange={(event) => setTelefono(event.target.value)}
          />
        </label>
      </div>
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
      {/* Boton de registro */}
      <div className="ComponentesRe">
        <button onClick={RegistrarClientes} type="submit">
          Registrar cliente
        </button>
        <br />
        <button onClick={() => Navegador("/tablas/clientes")} type="submit">
          Tabla de clientes
        </button>
        <br />
        <button onClick={() => Navegador("/")} type="submit">
          Volver a la pagina principal
        </button>
      </div>
    </div>
  );
}
