import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
