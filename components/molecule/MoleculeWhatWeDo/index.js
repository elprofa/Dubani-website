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
                marge_bas="40px" 
                alignement="center" 
                marge_haut="40px" 
                taille="16px"
                poid_font="600"
                >
               {props.texte}
        </Texte>
        <MonBouton 
        bg="#0a2db0" 
        bg_after="#fff"
        couleur="#000" 
        taille="24px"
        largeur="150px"
        icon={<BsArrowRight />} />
        </WhatWeDoStc>
    )
}

export default WhatWeDo;