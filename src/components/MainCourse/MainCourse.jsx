import React from 'react';
import mainPhoto from '../../assets/main-photo-cooking.jpg';
import './main-course.css';

const MainCourse = () => {
  return (
    <section className='main-course'>
      <img className='main-course-photo' src={mainPhoto}/>  
      <article className='main-course-info'>
        <div className='main-course-info-container'>
            <h1>Curso de manipulación de alimentos</h1>
            <p>Formación virtual en bioseguridad y buenas prácticas de alimentación 
                para el cumplimiento de lo establecido en la autorización 
                DSP-SDVSP-AL-CMA-086-05-21 emitida por la secretaría de salud de la Gobernación de Cundinamarca
            </p>
            <h3>10 horas de intensidad</h3>
            <p className='main-course-modality'>Modalidad Virtual o presencial</p>
            <h2>$40.000</h2>
            <button className='main-course-contact'>Quiero Saber más del Curso &nbsp;<span></span></button>
        </div>
      </article>
    </section>
  )
}

export default MainCourse
