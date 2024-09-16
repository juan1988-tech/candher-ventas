import React, { useRef, useState } from 'react';
import './header.css';

const Header = () => {
  const firstLineReference = useRef(null)
  const secondLineReference = useRef(null)
  const thirdLineReference = useRef(null)

const onChangeBurguer = () =>{
  const firstNode = firstLineReference.current;
  const secondNode = secondLineReference.current;
  const thirdNode = thirdLineReference.current;

  firstNode.classList.toggle('first-line-change');
  secondNode.classList.toggle('second-line-change');
  thirdNode.classList.toggle('third-line-change');
}  
  
  return (
    <header className='header'>
      <div className='header-container'>
      <section className='header-logo'>
        <h1>Candy <span>Hernandez</span></h1>
        <p>Asesora Comercial <span>Ambiental y Sanitaria</span></p>
      </section>
      <section className='burguer-button' onClick={onChangeBurguer}>
        <article className='first-line' ref={firstLineReference}></article>
        <article className='second-line'ref={secondLineReference}></article>
        <article className='third-line' ref={thirdLineReference}></article>
      </section>
      </div>
    </header>
  )
}

export default Header
