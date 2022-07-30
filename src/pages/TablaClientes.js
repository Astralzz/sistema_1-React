import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { firebaseBuscar, firebaseEliminar } from "../FirebaseUtil";
import { ClientesMain } from "../utils/Cliente";
import "./Tablas.css";

//Eliminar cliente
export function eliminarCliente(id) {
  //Coleccion
  const coleccion = "clientes";

  //Eliminamos
  firebaseEliminar(coleccion, id);

  swal({
    //Mostramos mensaje
    title: "ÉXITO!",
    text: "El cliente se a eliminado correctamente",
    icon: "success",
    button: "Aceptar",
  });

  //Actualizamos la pagina
  window.location.reload(true);
}

//Tabla Clientes
function TablaClientesMain() {
  //Clientes
  const [clientes, setClientes] = useState([]);

  //buscamos apenas cargue la pagina
  useEffect(() => {
    buscarClientes();
  }, []);

  //Buscamos clientes
  const buscarClientes = async () => {
    //obtenemos la lista
    let lista = await firebaseBuscar("clientes");
    setClientes(lista);
  };

  //Obtenemos la navegación
  const Navegador = useNavigate();

  return (
    <div className="TablaCl">
      {/*Tabla */}
      <div className="ComponentesTablaCl">
        <table className="tablaAzul">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Paterno</th>
              <th>Materno</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>id</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((objeto) => {
              return (
                <ClientesMain
                  key={objeto.id}
                  nombre={objeto.nombre}
                  apellido_p={objeto.apellido_p}
                  apellido_m={objeto.apellido_m}
                  telefono={objeto.telefono}
                  email={objeto.email}
                  id={objeto.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Boton de Menu */}
      <div className="ComponentesTablaCl">
        <button onClick={() => Navegador("/Registro/Cliente")} type="submit">
          Registrar un cliente
        </button>
        <button onClick={() => Navegador("/")} type="submit">
          Volver a la pagina principal
        </button>
      </div>
    </div>
  );
}

export default TablaClientesMain;
