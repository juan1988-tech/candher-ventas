import React, { useEffect, useRef } from 'react';
import './services.css';
import manipulacionAlimentos from '../../assets/icons/manipulacion-alimentos-logo.svg';
import saludOcupacional from '../../assets/icons/salud-ocupacional-logo.svg';
import iso9001 from '../../assets/icons/iso-9001-logo.svg';
import seguridadSocial from '../../assets/icons/seguridad-social-logo.svg'

const ServiceItem = ({image,classNameNode,serviceTittle,serviceDescription}) =>{

    return(
    <article className={classNameNode} >
        <div className='services-item-container'>
        <figure className='service-item-logo'>
            <img  className='service-item-image' src={image}/>
        </figure>
        <section className='service-item-description'>
            <h4>{serviceTittle}</h4>
            <p>{serviceDescription}</p>
        </section>
        </div>
    </article>
    )
}

const Services = () => {
  const setServices = [
    {
        classNameNode: 'services-item-manipulate',
        image: manipulacionAlimentos,
        serviceTittle: 'Curso de manipulacion de alimentos',
        serviceDescription: 'Acompañamiento formativo en buenas manufacturas BPM e higiene alimentaria para restaurantes, cafeterías y servicios móviles de comida'
    },
    {
        classNameNode: 'services-item-health',
        image: saludOcupacional,
        serviceTittle: 'Asesoría y servicios de salud ocupacional',
        serviceDescription: 'Capacitaciones, asesoría y consultoría y programas de fomento de la salud y seguridad en el trabajo a nivel organizacional'
    },
    {
        classNameNode: 'services-item-quality',
        image: iso9001,
        serviceTittle: 'Consultoría y gestión del Sistema de Gestión de calidad ISO:9001',
        serviceDescription: 'Capacitaciones, asesoría y consultoría y programas de fomento de la salud y seguridad en el trabajo a nivel organizacional'
    },
    {
      classNameNode: 'services-item-social-securtiy',
      image: seguridadSocial,
      serviceTittle: 'Afiliaciones a seguridad social',
      serviceDescription: 'Asesoría en planes de afiliación de EPS, ARL, Caja de compensación y pensión para contratistas y profesionales independientes'
  }
  ]  

  return (
    <section className='services'>
      {setServices.map((item)=>{
        return  <ServiceItem
        key={item.classNameNode}
        classNameNode={item.classNameNode}
        image={item.image}
        serviceTittle={item.serviceTittle}
        serviceDescription={item.serviceDescription}  
      />
      })}   
    </section>
  )
}

export default Services



