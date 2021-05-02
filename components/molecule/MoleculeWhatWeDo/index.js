import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import WhatWeDoStc from './MoleculeWhatWeDo.stc';
import MonImage from '../../shared/MonImage';
import Texte from '../../shared/Texte';
import {BsArrowRight} from "react-icons/bs";
import MonBouton from '../../shared/Bouton';
import Link from 'next/link';


const WhatWeDo=(props)=>{
    return (
        <WhatWeDoStc>
            <span className="span">{props.icon}</span>
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
        <Link href="/service">
            <a>
                <MonBouton 
                bg="transparent" 
                bg_after="transparent"
                couleur="#0a2db0" 
                taille="24px"
                largeur="150px"
                icon={<BsArrowRight />} />
            </a>
        </Link>
        </WhatWeDoStc>
    )
}

export default WhatWeDo;