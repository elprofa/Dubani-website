import React from 'react'

import TexteStc from './Texte.stc';

const Texte=(props)=>{
    return (
        <TexteStc couleur={props.couleur} taille={props.taille}>
            {props.children}
        </TexteStc>
    )
}

export default Texte;