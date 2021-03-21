import React from 'react';
import SectionClientMoleculeBodyStc from './MoleculeBodySectionClient.stc';
import CardClient from '../../shared/CardClient';
import {Col,Row} from "reactstrap";

const Listes=[
    {chemin:"/img/img9.png",lien:"www.wedo.com"},
    {chemin:"/img/img10.jpg",lien:"www.wedo.com"},
    {chemin:"/img/img8.png",lien:"www.wedo.com"},
    {chemin:"/img/img11.png",lien:"www.wedo.com"},
    {chemin:"/img/img12.jpg",lien:"www.wedo.com"},
    {chemin:"/img/img13.jpg",lien:"www.wedo.com"},
    {chemin:"/img/img15.png",lien:"www.wedo.com"},
    {chemin:"/img/img16.jpg",lien:"www.wedo.com"}
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