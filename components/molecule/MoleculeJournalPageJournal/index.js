import React from 'react';
import MoleculeStc from './MoleculeJournalPageJournal.stc';
import MonImage from '../../shared/MonImage';
import Bouton from '../../shared/Bouton';
import Titre from '../../shared/Titre';
import { BsArrowRight } from "react-icons/bs";
import Texte from '../../shared/Texte';
import {Row,Col} from 'reactstrap';
import Link from 'next/link';

const MoleculeJournal=(props)=>{

    return(
        <MoleculeStc >
            <Col md={4}>
                <MonImage chemin={props.picture} />
            </Col>
            <Col md={8}>
                <Titre texte={props.titre} taille="25px" poid_font="600" marge_bas="40px" />
                <Texte taille="14px" marge_bas="40px">
                {props.description}
                </Texte>
                <Link href="/detail-journal">
                    <a href="/detail-journal">
                        <Bouton texte="VIEW DETAIL"
                            bg="#ccc"
                            bg_after="#fff"
                            marge_haut="0px" 
                            couleur="#333" 
                            icon={<BsArrowRight />} />
                    </a>
                </Link>
            </Col>
        </MoleculeStc>
    )
}
export default MoleculeJournal;