import React from 'react';
import BotaoVoltar from '../../componentes/BotaoVoltar';
import MainCards from '../../componentes/MainCards';
import TopMenu from '../../componentes/TopMenu';
import SideMenu from '../../componentes/SideMenu';

// const Teste = () => (
//   <div>
//     <MainCards></MainCards>
//     <h1>Teste</h1>
//   </div>
// );

const Main = () => (
  <div>

    <TopMenu></TopMenu>
    <SideMenu></SideMenu>
    <MainCards></MainCards>
    <BotaoVoltar />
  </div>
);

export default Main;