import React from 'react';
import SectionProvideStc from './SectionProvideBodyPageAgency.stc';
import ProvideCard from '../../shared/ProvideCard';
import {Col} from 'reactstrap';

const SectionProvideBody=()=>{
    const provides=[
        {texte:"LIBERALISTIC",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},
        {texte:"IDEAL",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},
        {texte:"NON-STOP",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},
        {texte:"KNOWLEDGE",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},
        {texte:"SUCCESS",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},
        {texte:"TECHNOLOGY",caption:"We value Our Employees & Stackholders for New Ideas or Opinions"},

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