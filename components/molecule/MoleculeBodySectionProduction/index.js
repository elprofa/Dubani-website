import React from "react";
import ReactDOM from "react-dom";
import Simple from "../Caroussel";

import SectionProductionMoleculeBody from './MoleculeBodySectionProduction.stc';

const Section=(props)=>{
    return (
        <SectionProductionMoleculeBody className="App" style={{ width: 1050 }}>
            <Simple deviceType={"desktop"} />
        </SectionProductionMoleculeBody>
    )
}

export default Section; 
