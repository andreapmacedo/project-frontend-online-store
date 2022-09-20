import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import MainPage from "../paginas/PaginaInicial";
// import FrontEnd from "../paginas/PaginaFrontEnd";
// import PaginaBackEnd from "../paginas/PaginaBackEnd";
import MainPage from "../pages/MainPage";
import CategoryPage from "../pages/categoryPage";
import SearchPage from "../pages/SearchPage/SearchPage";

import MainProvider from '../Provider/MainProvider';

const Rotas = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/'   element={<MainPage/>}/> */}
        <Route exact path='/'   element={<MainPage/>}/>
        {/* <Route path='/front-end' element={<FrontEnd/>}/> */}
        {/* <Route path='/back-end'  element={<PaginaBackEnd/>}/> */}
        <Route path='/main'  element={<MainPage/>}/>
        <Route path='/category'  element={<CategoryPage/>}/>
        <Route path='/search'  element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  </MainProvider>
);

export default Rotas;