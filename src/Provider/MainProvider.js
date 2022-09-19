import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../Context/MainContext';

function MainProvider({ children }) {
  const [selectedListItems, setSelectedListItems] = useState('');
  const [cartItems, setCartItem] = useState([]);

  const context = {
    selectedListItems,
    setSelectedListItems,
    cartItems,
    setCartItem
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
