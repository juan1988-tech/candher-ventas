import React from 'react';
import './portfolio.css';
import PortfolioCard from '../../elements/PortfolioCard/PortfolioCard';
import portafolioSaludOcupacional from '../../assets/portfolio/portafolio-asesori-seguridad-trabajo.svg';
import portafolioAcompSST from '../../assets/portfolio/portafolio-acompanamiento-sst.svg';
import portafolioISO9001 from '../../assets/portfolio/portafolio-iso-9001.svg';
import portafolioEvalPsicologica from '../../assets/portfolio/portafolio-evaluacion-psicologica.svg';
import portafolioBateriPsicosocial from '../../assets/portfolio/portafolio-bateria-riesgo-psicosocial.svg';
import portafolioTalleresSaludMental from '../../assets/portfolio/portafolio-capacitacion-salud-mental.svg';
import portafolioExpedCertMed from '../../assets/portfolio/portafolio-exped-certificados-medicos.svg';
import portafolioPlanesSaneamiento from '../../assets/portfolio/portafolio-planes-de-saneamiento.svg';
import portafolioSeguridadSocial from '../../assets/portfolio/portafolio-afiliacion-seguridad-social.svg';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio-container'>
        <h1>Portafolio de Servicios de salud ocupacional</h1>
        <PortfolioCard 
        logoCard={portafolioSaludOcupacional}
        portfolioTittle='Asesoría en seguridad y salud en el trabajo'
        portfolioDescription='Soluciones integrales en Sistemas de Gestión SST, Psicología Organizacional, Intermediación ARL, Capacitación Empresarial'
        />
        <PortfolioCard
        logoCard={portafolioAcompSST}
        portfolioTittle='Acompañamiento e implementación SST'
        portfolioDescription='Acompañamiento , Auditoría, Asesoría y Consultoría SST, Evaluación Final'
        />
        <PortfolioCard
        logoCard={portafolioISO9001}
        portfolioTittle='ISO 9001: 2015'
        portfolioDescription="Auditoría ISO 9001, Asesoría y Consultoría SG-Calidad, Intervención y formación empresarial"
        />
        <PortfolioCard
        logoCard={portafolioEvalPsicologica}
        portfolioTittle='Evaluación Psicológica'
        portfolioDescription="Valoración  psicosocial de los colaboradores de su empresa, para mejorar el ambiente organizacional"
        />
        <PortfolioCard
        logoCard={portafolioBateriPsicosocial}
        portfolioTittle='Batería de riesgo psicosocial'
        portfolioDescription="Evaluación de factores de riesgo psicosocial intralaboral y extralaboral"
        />
        <PortfolioCard
        logoCard={portafolioTalleresSaludMental}
        portfolioTittle='Capacitación  y talleres  salud mental a nivel empresarial'
        portfolioDescription='Elaboración de campañas y talleres de promoción e intervención empresarial en el campo de la salud mental'
        />
        <PortfolioCard
        logoCard={portafolioExpedCertMed}
        portfolioTittle='Expedición de certificados médicos'
        portfolioDescription='Expedición de certificados médicos para el ingresar al trabajo o a una institución educativa'
        />
        <PortfolioCard
        logoCard={portafolioPlanesSaneamiento}
        portfolioTittle='Planes  de saneamiento'
        portfolioDescription='Asesoría de planes de saneamiento para cumplir con un concepto sanitario favorable'
        />
        <PortfolioCard
        logoCard={portafolioSeguridadSocial}
        portfolioTittle='Afiliaciones a seguridad social'
        portfolioDescription='Afíliese a seguridad social cómo independiente y contratista, y obtenga las coberturas de ARL, EPS  y PENSIÓN'
        />
      </div>
    </section>
  )
}

export default Portfolio