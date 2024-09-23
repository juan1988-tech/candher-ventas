import React, { useContext, useRef, useState } from 'react';
import './header.css';
import BurguerButton from '../../elements/BurguerButton/BurguerButton';
import PortfolioTarget from '../PortfolioTarget/PortfolioTarget';
import PortfolioServices from '../../elements/PortfolioServices/PortfolioServices';
import PortfolioCellphone from '../../elements/PortfolioCellphone/PortfolioCellphone';

const Header = () => {
  let bodyWidth = document.body.clientWidth;
  console.log(bodyWidth);  

  return (
    <header className='header'>
      <div className='header-container'>
      <section className='header-logo'>
        <h1>Candy <span>Hernandez</span></h1>
        <p>Asesora Comercial <span>Ambiental y Sanitaria</span></p>
      </section>
      <BurguerButton/>
      <section className='header-buttons'>
        <PortfolioServices/>
        <PortfolioCellphone/>
      </section>
      </div>
      <PortfolioTarget/>
    </header>
  )
}

export default Header
