import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import WhatWeDoStc from './MoleculeWhatWeDo.stc';
import MonImage from '../../shared/MonImage';
import Texte from '../../shared/Texte';

const WhatWeDo=(props)=>{
    return (
        <WhatWeDoStc>
            <MonImage chemin="/img/fpic1.svg" largeur="100" hauteur="100"/>
            <Texte 
                couleur="#000" 
                marge_bas="40" 
                alignement="center" 
                marge_haut="40" 
                >
                Digital marketing
        </Texte>
        </WhatWeDoStc>
    )
}

export default WhatWeDo;