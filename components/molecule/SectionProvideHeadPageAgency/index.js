import React from "react";
import SectionProvideStc from './SectionProvideHeadPageAgency.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';



const SectionProvideHead=(props)=>{

    return(
        <SectionProvideStc ref={props.reference}>
            <SousTitre 
                texte="WE PROVIDE" 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"/>
            <Titre 
                texte="We Are Combination Of" 
                poid_font="700"/>
            <Titre 
                texte="Greatculture,Value Sand Strong Beliefs" 
                poid_font="700"/>

        </SectionProvideStc>
    )
}

export default SectionProvideHead;