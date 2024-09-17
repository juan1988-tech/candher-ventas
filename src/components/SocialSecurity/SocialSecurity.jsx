import React from 'react';
import './social-security.css';
import compensar from '../../assets/seguridad social/compensar-logo.png';
import nuevaEps from '../../assets/seguridad social/eps-nueva-eps-logo.svg';
import saludMia from '../../assets/seguridad social/eps-salud-mia.svg';
import saludTotal from '../../assets/seguridad social/eps-salud-total.svg';
import sanitas from '../../assets/seguridad social/eps-sanitas.svg';
import sura from '../../assets/seguridad social/eps-sura.png';
import famisanar from '../../assets/seguridad social/famisanar-logo.png';
import capital from '../../assets/seguridad social/Logo_Capital_RGB-01.png';
import coosalud from '../../assets/seguridad social/logo_coosalud.png';

const SocialSecurity = () => {
  return (
    <section className='social-security'>
        <div className='social-security-container'>
        <h1>Afiliaciones a seguridad social</h1>
        <p>Afíliese a de EPS, ARL, pensión y caja de compensación</p>
        <article className='eps-images'>
            <img src={compensar} className='compensar-logo'/>
            <img src={nuevaEps} className='nuevaeps-logo'/>
            <img src={saludMia} className='saludmia-logo'/>
            <img src={saludTotal} className='saludtotal-logo'/>
            <img src={sanitas} className='sanitas-logo'/> 
            <img src={sura} className='sura-logo'/>
            <img src={famisanar} className='famisanar-logo'/>
            <img src={capital} className='capitalsalud-logo'/>
            <img src={coosalud} className='coosalud-logo'/>
        </article>
        <button className='social-security-contact'>Afiliación a seguridad social <span></span></button>
        </div>
    </section>
  )
}


export default SocialSecurity
