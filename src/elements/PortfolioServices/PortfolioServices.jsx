import React from 'react';
import './portfolio-services.css';
import { useContext,useRef } from 'react';
import { AppContext } from '../../context/AppContext';

const PortfolioServices = () => {
  const { portfolioRef } = useContext(AppContext);
  const portafolioServicesRef = useRef(null); 
  const trayContainerRef = useRef(null);
  const arrowRef = useRef(null);

  const onChangeTrayContainer = () =>{  
    const portafolioServicesRefNode = portafolioServicesRef.current;
    portafolioServicesRefNode.classList.toggle('portfolio-services-change');

    const trayContainerNode = trayContainerRef.current;
    trayContainerNode.classList.toggle('portfolio-tray-container-shrink');
    
    const arrowRefNode = arrowRef.current;
    arrowRefNode.classList.toggle('down-arrow');
  }

  return (
    <section className='portfolio-services' ref={portafolioServicesRef}>
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
    </section>
  )
}

export default PortfolioServices
 