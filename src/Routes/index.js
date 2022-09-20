import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import MainPage from "../paginas/PaginaInicial";
// import FrontEnd from "../paginas/PaginaFrontEnd";
// import PaginaBackEnd from "../paginas/PaginaBackEnd";
import MainPage from "../pages/MainPage";
import CategoryPage from "../pages/categoryPage";
<<<<<<< HEAD
import ItemDetails from "../pages/ItemDetails";
=======
import SearchPage from "../pages/SearchPage/SearchPage";
>>>>>>> roomseven/cart

import MainProvider from '../Provider/MainProvider';

const Rotas = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/'   element={<MainPage/>}/> */}
        <Route exact path='/' element={<MainPage/>}/>
        {/* <Route path='/front-end' element={<FrontEnd/>}/> */}
        {/* <Route path='/back-end'  element={<PaginaBackEnd/>}/> */}
<<<<<<< HEAD
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/product/:id' element={<ItemDetails />}/>
        <Route path='/category' element={<CategoryPage/>}/>
=======
        <Route path='/main'  element={<MainPage/>}/>
        <Route path='/category'  element={<CategoryPage/>}/>
        <Route path='/search'  element={<SearchPage/>}/>
>>>>>>> roomseven/cart
      </Routes>
    </BrowserRouter>
  </MainProvider>
);

export default Rotas;