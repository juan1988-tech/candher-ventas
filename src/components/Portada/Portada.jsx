import React from 'react';
import './portada.css';

const Portada = () => {
  return (
    <section className='portrait'>
        <div className='portrait-container'>
        <h1 className='portrait-tittle'>Candy <span>Hernandez</span></h1>
        <p className='portrait-description'>Asesora comercial en &nbsp;<span>documentación sanitaria, ambiental y de salud ocupacional</span>
        para los municipios de &nbsp;<span>Mosquera, Funza, Madrid y Cundinamarca</span></p>
        <p className='portrait-role'>Ofrezco un amplio portafolio de servicios, capacitaciones y asesorías en el campo del cumplimiento de las normas fitosanitarias, normas de calidad y de salud ocupacional</p>
        <article className='portrait-photo'></article>
        <button className='portrait-contact'>Contactar  &nbsp;<span className='portrait-whatsapp'></span></button>
        </div>
    </section>
  )
}

export default Portada
