import React from 'react';
import MaLigneStc from './LineFooter.stc';

const MaLigne=(props)=>{
    return (
        <MaLigneStc epaisseur={props.epaisseur} couleurBordure={props.couleurBordure} />
    )
}

export default MaLigne;