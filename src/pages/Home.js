import "./Home.css";
import { useNavigate } from "react-router-dom";

//PAGINA PRINCIPAL
export default function HomeMain() {
  //Obtenemos la navegación
  const Navegador = useNavigate();

  return (
    <div className="DivPagPrincipal">
      <h1>PAGINA PRINCIPAL</h1>
      {/* Boton de registro */}
      <div className="ComponentesRe">
        <button onClick={() => Navegador("/Registro")} type="submit">
          Registrar un usuario
        </button>
        <button onClick={() => Navegador("/Registro/Cliente")} type="submit">
          Registrar un cliente
        </button>
        <br />
        <button onClick={() => Navegador("/Login")} type="submit">
          Iniciar sesión
        </button>
        <br />
        <button onClick={() => Navegador("/tablas/clientes")} type="submit">
          Tabla de clientes
        </button>
      </div>
    </div>
  );
}
