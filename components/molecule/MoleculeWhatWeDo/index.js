import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import WhatWeDoStc from './MoleculeWhatWeDo.stc';
import MonImage from '../../shared/MonImage';
import Texte from '../../shared/Texte';
import {BsArrowRight} from "react-icons/bs";
import MonBouton from '../../shared/Bouton';

const WhatWeDo=(props)=>{
    return (
        <WhatWeDoStc>
            <MonImage chemin={props.chemin} largeur="100" hauteur="100"/>
            <Texte 
                couleur="#000" 
                marge_bas="40" 
                alignement="center" 
                marge_haut="40" 
                taille="16"
                poid_font="600"
                >
               {props.texte}
        </Texte>
        <MonBouton 
        bg="transparent" 
        couleur="#000" 
        taille="24px"
        icon={<BsArrowRight />} />
        </WhatWeDoStc>
    )
}

export default WhatWeDo;