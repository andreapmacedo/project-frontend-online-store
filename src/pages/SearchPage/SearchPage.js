import React from 'react';
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
// import CategoriesCards from '../../components/CategoriesCards';
import SearchCards from '../../components/SearchCards/SearchCards';
import './style.css';

const SearchPage = () => (
  <div className="main-page-container">
    <div className="main-top-menu-container">
      <TopMenu></TopMenu>
    </div>
    <div className="main-body-container" >
      <div className="main-body-side-menu">
        <SideMenu></SideMenu>
      </div>
      <div className="main-body-cards">
        <SearchCards></SearchCards>
      </div>
    </div>
    
  </div>
);

export default SearchPage;