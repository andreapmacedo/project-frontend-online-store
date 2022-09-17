import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../Context/MainContext';

function MainProvider({ children }) {
  const [selectedListItems, setSelectedListItems] = useState('');

  const context = {
    selectedListItems,
    setSelectedListItems,
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
