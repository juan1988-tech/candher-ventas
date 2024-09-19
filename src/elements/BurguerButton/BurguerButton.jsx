import { useRef,useContext } from "react";
import { AppContext } from "../../context/AppContext";

const BurguerButton = () =>{
    const { firstLineReference,secondLineReference,thirdLineReference,onChangeBurguer} = useContext(AppContext);
    
      return(
        <section className='burguer-button' onClick={onChangeBurguer}>
            <article className='first-line' ref={firstLineReference}></article>
            <article className='second-line'ref={secondLineReference}></article>
            <article className='third-line' ref={thirdLineReference}></article>
          </section>
      )
    }

export default BurguerButton;