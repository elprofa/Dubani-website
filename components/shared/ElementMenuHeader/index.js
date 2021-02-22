import React from 'react';
import {Card} from 'react-bootstrap';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import ElementMenuHeaderStc from './ElementMenuHeader.stc';
import {BsArrowRight} from "react-icons/bs";
import Link from 'next/link'

const ElementMenuHeader=(props)=>{
    return (
        <ElementMenuHeaderStc transformation={props.transformation} onClick={props.cliquer}>
            <Link href={props.lien}>
                <a >
                    <Courbe couleur="#2058c8" marge_bas="0" className="CourbeAccueil"/>
                
                    <Titre 
                        texte={props.texte}
                        poid_font="500"
                        taille="30px"
                        couleur="#fff"
                        />
                    <BsArrowRight />
                </a>
            </Link>
        </ElementMenuHeaderStc>
    )
}

export default ElementMenuHeader;