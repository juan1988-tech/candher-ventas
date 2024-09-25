import React from 'react'
import './footer.css';
const Footer = () => {
const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className='footer-conntainer'>
        <h1 className='footer-tittle'>Candy <span>Hernandez</span></h1>
        <p className='footer-description'>ASESORA COMERCIAL EN NORMATIVA SANITARIA, AMBIENTAL Y DE SALUD OCUPACIONAL</p>

        <p className='footer-addtional-info'>candyhernandez@gmail.com | 3203434336</p>
        <p className='footer-location'>{currentYear} Bogotá, Colombia</p>
        <section className='footer-developer-links'>
            <p>Diseño y desarrollo por</p>
            <a href='https://www.linkedin.com/in/jfranco-webdev/' target="_blank">Juan David Franco</a>
        </section>
        </div>
    </footer>
  )
}

export default Footer
