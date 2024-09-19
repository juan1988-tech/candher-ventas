import React, { useContext, useRef } from 'react'
import './portfolio-target.css';
import { AppContext } from '../../context/AppContext';

const PortfolioTarget = () => {
  const { portfolioRef } = useContext(AppContext)
    

  return (
    <section className='portfolio-target' ref={portfolioRef}>
        <article className='portfolio-extensible'>
            <p>PORTAFOLIO DE SERVICIOS</p>
            <span></span>
        </article>
        <div className='portfolio-tray-container'>
            <article className='portfolio-tray'>
    
            </article>  
        </div>
        <section className='portfolio-cellphone'>
            <span></span>
            <p>3203434336</p>
        </section>    
    </section>
  )
}

export default PortfolioTarget
