import { eliminarCliente } from "../pages/TablaClientes";

export function ClientesMain(props) {
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.apellido_p}</td>
      <td>{props.apellido_m}</td>
      <td>{props.telefono}</td>
      <td>{props.email}</td>
      <td>{props.id}</td>
      <td>
        <button
          onClick={() => {
            eliminarCliente(props.id);
          }}
          type="submit"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
