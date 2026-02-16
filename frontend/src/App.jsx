import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./pages/login/login";
import { Main } from "./pages/home/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
