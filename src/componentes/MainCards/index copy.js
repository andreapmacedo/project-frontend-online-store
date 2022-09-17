import React, { useState } from 'react';
import BotaoVoltar from '../BotaoVoltar';
// import { useHistory } from 'react-router-dom';

// const history = useHistory();

// const [status, setStatus] = useState('');

const TextPlain = ({param}) => {
  return (
  <div>
    <h1>TextPlain</h1> 
    <h1>{param}</h1>
  </div>
  )
};

const AnObject_1 = ({param}) => {
  return (
  <div>
    <h1>AnObject_1</h1> 
    <h1>{param}</h1>
  </div>
  )
};

const AnObject_2 = (param) => {
  return (
  <div>
    <h1>AnObject_1</h1> 
    <h1>{param}</h1>
  </div>
  )
};

const AnObject_3 = ( {param} ) => {
  
  // console.log(param1);
  return (
  <div>
    <h1>AnObject_3</h1> 
    <h1>{param.id}</h1>
    {/* <h1>{param1.id}</h1> */}
  </div>
  )
};
  
  
export default function MainCards() {
  const [anObject, setanObject] = useState({id: 1, name: 'teste'});
  const textPlain = 'textPlain';

  console.log('anObject 1',  anObject);
  console.log('[anObject 2]',[anObject]);
  console.log('{anObject 3}',{anObject});

  return (
    <div>
      <TextPlain param={ textPlain }></TextPlain>
      {/* <AnObject_1 param={ anObject }></AnObject_1> */} {/* does not work */}
      <AnObject_1 param={ anObject.id }></AnObject_1> 
      {/* <AnObject_2 param={ anObject }></AnObject_2>  */} {/* does not work */}
      {/* <AnObject_2 param={ anObject.id }></AnObject_2>  */} {/* does not work */}
      <AnObject_3 param={ anObject }></AnObject_3>
      
    
    </div>
  )
};

