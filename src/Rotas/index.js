import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import MainPage from "../paginas/PaginaInicial";
import FrontEnd from "../paginas/PaginaFrontEnd";
import PaginaBackEnd from "../paginas/PaginaBackEnd";
import MainPage from "../paginas/MainPage";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route exact path='/'   element={<MainPage/>}/> */}
      <Route exact path='/'   element={<MainPage/>}/>
      <Route path='/front-end' element={<FrontEnd/>}/>
      <Route path='/back-end'  element={<PaginaBackEnd/>}/>
      <Route path='/main'  element={<MainPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;