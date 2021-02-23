import React from 'react';
import SousTitreStc from './SousTitre.stc';

const SousTitre=(props)=>{
    return (
        <SousTitreStc 
                className="soustitre"
                couleur={props.couleur} 
                marge_haut={props.marge_haut} 
                marge_bas={props.marge_bas} 
                taille={props.taille} 
                poid_font={props.poid_font}>
            {props.texte}
        </SousTitreStc>
    )
}

export default SousTitre;