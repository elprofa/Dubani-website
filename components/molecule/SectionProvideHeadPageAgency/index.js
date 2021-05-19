import React from "react";
import SectionProvideStc from './SectionProvideHeadPageAgency.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';



const SectionProvideHead=(props)=>{

    return(
        <SectionProvideStc ref={props.reference}>
            <SousTitre 
                texte="CE QUE NOTRE AGENCE DIGITALE FOURNIT" 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"/>
            <Titre 
                texte="Nous sommes une équipe dotée d’une diversité culturelle," 
                poid_font="700"/>
            <Titre 
                texte=" ce qui fait notre force de travail et notre pouvoir de compréhension." 
                poid_font="700"/>

        </SectionProvideStc>
    )
}

export default SectionProvideHead;