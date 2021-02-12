import React from 'react';
import MaLigneStc from './LineFooter.stc';

const MaLigne=(props)=>{
    return (
        <MaLigneStc marge_bas={props.marge_bas} marge_haut={props.marge_haut} epaisseur={props.epaisseur} couleur_bordure={props.couleurBordure} />
    )
}

export default MaLigne;