import React, { useId } from 'react';
import './contact.css';

const Contact = () => {
const customerId = useId();

  return (
    <section className='contact'>
      <div className='contact-container'>
        <h1>Contáctenos</h1>
        <p>Permítamos contactarle para ofrecerle la mejor asesoría en documentación y cumplimiento de normas sanitarias, ambientales y de salud</p>
        <form id={customerId} className='contact-form'>
            <section className='contact-form-container'>
            <article className='contact-form-col form-name'>
                <label>Nombre</label>
                <input type="text" name="nombre"/>
            </article>
            <article className='contact-form-col form-surname'>
                <label>Apellido</label>
                <input type="text" name="apellido"/>
            </article>  
            <article className='contact-form-col-2 form-business'>
                <label>Razon social</label>
                <p>&#40;Si desea cotizar nuestros servicios para una empresa&#41;</p>
                <input type="text" name="empresa"/>
            </article>
            <article className='contact-form-col form-email'>
                <label>Correo</label>
                <input type="text" name="correo"/>
            </article>
            <article className='contact-form-col form-city'>
                <label>Ciudad o municipio</label>
                <input type="text" name="city"/>
            </article>
            <article className='contact-form-col form-address'>
                <label>Dirección <span className='optional'>&#40;opcional&#41;</span></label>
                <input type="text" name="address"/>
            </article>
            </section>
            <section className='form-options'>
                <p>Deseo información en</p>
            <div className='fieldset-container'>    
            <fieldset className='options-container'>
                <article className='options-container-row'>
                    <label>Curso Manipulacion de alimentos</label>
                    <input type="radio" name="options" value='manipulacion-alimentos'/>
                </article>
                <article className='options-container-row'>
                    <label>Asesoria en seguridad y salud en el trabajo</label>
                    <input type="radio" name="options" value='asesoria-salud-en-el-trabajo'/>
                </article>
                <article className='options-container-row'>
                    <label>Acompañamiento e implementación SST</label>
                    <input type="radio" name="options" value='acompannamiento-implentacion-SST'/>
                </article>
                <article className='options-container-row'>
                    <label>ISO 9001: 2015</label>
                    <input type="radio" name="options" value='ISO-9001'/>
                </article>
                <article className='options-container-row'>
                    <label>Evaluación Psicológica</label>
                    <input type="radio" name="options" value='evaluacion-psicologica'/>
                </article>
                <article className='options-container-row'>
                    <label>Batería riesgo psicosocial</label>
                    <input type="radio" name="options" value='bateria-riesgo-psicosocial'/>
                </article>
                <article className='options-container-row'>
                    <label>Capacitación y talleres salud mental a nivel empresarial</label>
                    <input type="radio" name="options" value='talleres-salud-mental'/>
                </article>
                <article className='options-container-row'>
                    <label>Expedición certificados médicos</label>
                    <input type="radio" name="options" value='expedicion-certificados-medicos'/>
                </article>
                <article className='options-container-row'>
                    <label>Planes de saneamiento</label>
                    <input type="radio" name="options" value='planes-de-saneamiento'/>
                </article>
                <article className='options-container-row'>
                    <label>Afiliaciones a seguridad social</label>
                    <input type="radio" name="options" value='afiliaciones-seguridad-social'/>
                </article>
            </fieldset>
            </div>
            </section>
            <button className='form-contact-button'>Contactar <span></span></button>
        </form>
     </div>  
    </section>
  )
}

export default Contact
