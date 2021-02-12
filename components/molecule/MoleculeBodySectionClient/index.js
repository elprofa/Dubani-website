import React from 'react';
import SectionClientMoleculeBodyStc from './MoleculeBodySectionClient.stc';
import CardClient from '../../shared/CardClient';

const Listes=[
    {chemin:"/img/fpic1.svg",lien:"www.wedo.com"},
    {chemin:"/img/fpic1.svg",lien:"www.wedo.com"},
    {chemin:"/img/fpic1.svg",lien:"www.wedo.com"}
]

const SectionClientMoleculeBody=()=>{

    return (
        <SectionClientMoleculeBodyStc>
            {
                Listes.map((liste,index)=><CardClient affichage="inline-block" key={index} chemin={liste.chemin} />)
            }
        </SectionClientMoleculeBodyStc>
    )
}

export default SectionClientMoleculeBody;