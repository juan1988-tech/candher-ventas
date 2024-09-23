import React from 'react';
import { useRef } from 'react';
import { AppContext } from './AppContext';

const AppContextProvider = ({children}) => {
//referencias para el compoente de hamburguesa
const firstLineReference = useRef(null);
const secondLineReference = useRef(null);
const thirdLineReference = useRef(null);

console.log(firstLineReference.current);
//referencia para la interfaz de portafolio
const portfolioRef = useRef(null);

//funcion para cambiar los estilos de tarjeta de portafolio
const onChangePortfolioTarget = () =>{
    const portfolioNode = portfolioRef.current;
    portfolioNode.classList.toggle('portfolio-target-change');
}

const onChangeBurguer = () =>{
    const firstNode = firstLineReference.current;
    const secondNode = secondLineReference.current;
    const thirdNode = thirdLineReference.current;
  
    firstNode.classList.toggle('first-line-change');
    secondNode.classList.toggle('second-line-change');
    thirdNode.classList.toggle('third-line-change');
    onChangePortfolioTarget();
  }

  return (
    <AppContext.Provider value={{firstLineReference,secondLineReference,thirdLineReference,onChangeBurguer,portfolioRef}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
