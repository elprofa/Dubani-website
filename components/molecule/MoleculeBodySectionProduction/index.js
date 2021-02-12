import React from "react";
import ReactDOM from "react-dom";
import Simple from "../Caroussel";

import SectionProductionMoleculeBody from './MoleculeBodySectionProduction.stc';

const Section=(props)=>{
    return (
        <SectionProductionMoleculeBody >
            <Simple deviceType={"desktop"} />
        </SectionProductionMoleculeBody>
    )
}

export default Section; 
