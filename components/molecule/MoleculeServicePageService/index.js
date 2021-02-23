import React from 'react';
import MoleculeStc from './MoleculeServicePageService.stc';
import MonImage from '../../shared/MonImage';
import Bouton from '../../shared/Bouton';
import Titre from '../../shared/Titre';
import { BsArrowRight } from "react-icons/bs";
import Texte from '../../shared/Texte';
import {Row,Col} from 'reactstrap';

const MoleculeService=(props)=>{
    if(props.position=="left")
    {
        
    return(
        <MoleculeStc >
            <Col md={4}>
                <MonImage chemin={props.picture} />
            </Col>
            <Col md={8} className={props.position}>
                <Titre texte={props.titre} taille="25px" poid_font="600" marge_bas="40px" />
                <Texte taille="14px" marge_bas="40px">
                {props.description}
                </Texte>
                <Bouton texte="VIEW PROJECT"
                    bg="#ccc"
                    bg_after="#fff"
                    marge_haut="0px" 
                    couleur="#333" 
                    icon={<BsArrowRight />} />
            </Col>
        </MoleculeStc>
    )
    }
    else
    {
        return(
            <MoleculeStc >
                <Col md={8} className={props.position}>
                    <Titre texte={props.titre} taille="25px" poid_font="600" marge_bas="40px" />
                    <Texte taille="14px" marge_bas="40px">
                    {props.description}
                    </Texte>
                    <Bouton texte="VIEW PROJECT"
                        bg="#ccc"
                        bg_after="#fff"
                        marge_haut="0px" 
                        couleur="#333" 
                        icon={<BsArrowRight />} />
                </Col>
                <Col md={4}>
                    <MonImage chemin={props.picture} />
                </Col>
            </MoleculeStc>
        )
    }
}
export default MoleculeService;