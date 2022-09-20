import React from 'react';
import './AmountButton.css';

const AmountButton = () => (
  <div className="amount-button-container">
    <input
      className="btnAdd"
      type="button"
      value="+"
      // onClick={ onClick }
    />    
    <input
      className="btnRem"
      type="button"
      value="+"
      // onClick={ onClick }
    />    
    <input
      className="btnRem"
      type="button"
      value="+"
      // onClick={ onClick }
    />    
  </div>
);

export default AmountButton;