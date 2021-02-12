import React from 'react'

import TexteStc from './Texte.stc';

const Texte=(props)=>{
    return (
        <TexteStc marge_bas={props.marge_bas} marge_haut={props.marge_haut} style_font={props.style_font} couleur={props.couleur} alignement={props.alignement} taille={props.taille}>
            {props.children}
        </TexteStc>
    )
}

export default Texte;