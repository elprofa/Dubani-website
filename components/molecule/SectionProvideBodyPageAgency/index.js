import React from 'react';
import SectionProvideStc from './SectionProvideBodyPageAgency.stc';
import ProvideCard from '../../shared/ProvideCard';
import {Col} from 'reactstrap';

const SectionProvideBody=()=>{
    const provides=[
        {texte:"LIBERALISME",caption:" le libre jeu de l'entreprise ne doit pas être entravé."},
        {texte:"IDEAL",caption:"atteindre la perfection de ce que l’on conçoit"},
        {texte:"NON-STOP",caption:"notre équipe est toujours à votre écoute. notre travail, notre priorité"},
        {texte:"CONNAISSANCE",caption:"notre équipe est toujours à votre écoute. notre travail, notre priorité"},
        {texte:"SUCCÈS",caption:"notre place parmi les meilleurs"},
        {texte:"TECHNOLOGIE",caption:"nous découvrons tout les jours de nouvelles technologies capable de vous séduire"},

    ]
    return (
        <SectionProvideStc>
            {
                provides.map((provide,index)=><Col key={index} md={4}><ProvideCard texte={provide.texte} caption={provide.caption} /></Col>)
            }
        </SectionProvideStc>
    )
}

export default SectionProvideBody