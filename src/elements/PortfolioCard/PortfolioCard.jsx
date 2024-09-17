const PortfolioCard = ({logoCard,portfolioTittle,portfolioDescription}) =>{
    return(
        <article className='portfolio-card'>
         <figure className='portfolio-card-logo'>
            <img src={logoCard}/>
         </figure>
         <h2 className='portfolio-tittle'>{portfolioTittle}</h2>
         <p className='portfolio-description'>{portfolioDescription}</p>
        </article>
    )
}

export default PortfolioCard;