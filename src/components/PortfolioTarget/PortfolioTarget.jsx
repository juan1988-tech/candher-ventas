import React, { useContext, useRef } from 'react'
import './portfolio-target.css';
import { AppContext } from '../../context/AppContext';

const PortfolioTarget = () => {
  const { portfolioRef } = useContext(AppContext)
  const trayContainerRef = useRef(null);
  const arrowRef = useRef(null);

  const onChangeTrayContainer = () =>{    
    const trayContainerNode = trayContainerRef.current;
    trayContainerNode.classList.toggle('portfolio-tray-container-shrink');
    
    const arrowRefNode = arrowRef.current;
    arrowRefNode.classList.toggle('down-arrow');
  }

  return (
    <section className='portfolio-target' ref={portfolioRef}>
        <article className='portfolio-extensible' onClick={onChangeTrayContainer}>
            <p>PORTAFOLIO DE SERVICIOS</p>
            <span className='up-arrow' ref={arrowRef}></span>
        </article>
        <div className='portfolio-tray-container' ref={trayContainerRef}>
            <ul className='portfolio-tray'>
              <li>
                <a>Curso manipulación de alimentos</a>
              </li>
              <li>
                <a>Asesoría de seguridad y salud en el trabajo</a>
              </li>
              <li>
                <a>Acompañamiento e implementación SST</a>
              </li>
              <li>
                <a>Asesoría ISO 9001:2015</a>
              </li>
              <li>
                <a>Evaluación psicologíca</a>
              </li>
              <li>
                <a>Bateria  riesgo psicosocial</a>
              </li>
              <li>
                <a>Capacitación y talleres - salud mental a nivel empresarial</a>
              </li>
              <li>
                <a>Expedición de certificados médicos</a>
              </li>
              <li>
                <a>Planes de saneamiento </a>
              </li>
              <li>
                <a>Afiliaciones a seguridad social</a>
              </li>
            </ul>  
        </div>
        <section className='portfolio-cellphone'>
            <span className='blue-phone'></span>
            <p>3203434336</p>
        </section>    
    </section>
  )
}

export default PortfolioTarget
