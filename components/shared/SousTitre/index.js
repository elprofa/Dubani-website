import React from 'react';
import SousTitreStc from './SousTitre.stc';

const SousTitre=(props)=>{
    return (
        <SousTitreStc 
                couleur={props.couleur} 
                margeHaut={props.marge_haut} 
                margeBas={props.marge_bas}
                taille={props.taille} 
                poidFont={props.poid_font}>
            {props.texte}
        </SousTitreStc>
    )
}

export default SousTitre;