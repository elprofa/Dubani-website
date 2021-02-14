import React from 'react';
import TitreStc from './Titre.stc';

const Titre=(props)=>{
    return (
        <TitreStc marge_bas={props.marge_bas} couleur={props.couleur} taille={props.taille} poid_font={props.poid_font}>
            {props.texte}
        </TitreStc>
    )
}

export default Titre; 