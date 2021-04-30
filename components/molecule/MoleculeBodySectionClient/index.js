import React from 'react';
import SectionClientMoleculeBodyStc from './MoleculeBodySectionClient.stc';
import CardClient from '../../shared/CardClient';
import {Col,Row} from "reactstrap";

const Listes=[
    {chemin:"/img/img8.png",lien:"#"},
    {chemin:"/img/img9.png",lien:"#"},
    {chemin:"/img/img10.jpg",lien:"#"},
   
    
]

const SectionClientMoleculeBody=()=>{

    return (
        <SectionClientMoleculeBodyStc>
            <Row>
                {
                    Listes.map((liste,index)=><Col md={3} key={index}><CardClient affichage="inline-block" chemin={liste.chemin} /></Col>)
                }
            </Row>
        </SectionClientMoleculeBodyStc>
    )
}

export default SectionClientMoleculeBody;