import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistroMain from "./pages/Registro";
import HomeMain from "./pages/Home";
import { firebaseConfig } from "./FirebaseUtil";
import LoginMain from "./pages/Login";
import TablaClientesMain from "./pages/TablaClientes";
import RegistrarClienteMain from "./pages/RegistrarCliente";

//Edain Jesus el wero

function App() {
  //Iniciamos la configuración
  firebaseConfig();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/Login" element={<LoginMain />} />
          <Route exact path="/Registro" element={<RegistroMain />} />
          <Route
            exact
            path="/Registro/Cliente"
            element={<RegistrarClienteMain />}
          />
          <Route
            exact
            path="/tablas/clientes"
            element={<TablaClientesMain />}
          />
          <Route path="*" render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
