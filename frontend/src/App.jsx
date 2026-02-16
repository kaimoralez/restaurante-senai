import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { Perfil } from "./pages/perfil/perfil";
import { Historico } from "./pages/historico/historico";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/perfil' element={<Perfil />} >  </Route>
        <Route path='/historico' element={<Historico />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
