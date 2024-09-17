import React from 'react';
import './about-me.css';

const AboutMeTarget = ({number,classNewName,classsPositionName}) =>{
    return(
        <article className={classNewName}>
        <p className='about-me-time'>2016 - 2022</p>
        <p className={'about-me-position '}>CARGO {number}</p>
        <p className='about-me-description'>BREVE DESCRIPCIÓN DEL CARGO, CONTANDO EXPERIENCIA, DE NO MÁS DE 3 RENGLONES</p>
      </article>
    )
}


const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='about-me-container'>  
      <h1>Acerca de mí</h1>
      <p className='about-me-story'>Tengo una amplia experiencia en la asesoría de restaurantes,
        puestos de comida en el ámbito del cumplimiento de la normativa ambiental y sanitaria</p>
        <section className='about-me-list-job'>
            <AboutMeTarget classNewName='about-me-target third-job' number='3'/>
            <AboutMeTarget classNewName='about-me-target second-job' number='2'/>
            <AboutMeTarget classNewName='about-me-target first-job' number='1'/>
        </section>
       </div>  
    </section>
  )
}

export default AboutMe
