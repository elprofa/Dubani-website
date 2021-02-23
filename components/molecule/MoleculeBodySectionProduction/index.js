import React from "react";
import ReactDOM from "react-dom";
//import Simple from "../Caroussel";
import Simple from '../MoleculeTesteSectionProduction';
import Image from "../../shared/MonImage";


import SectionProductionMoleculeBody from './MoleculeBodySectionProduction.stc';

const Section=(props)=>{
    return (
        <SectionProductionMoleculeBody >
            <Simple deviceType={"desktop"}
             itemClass="image-item"
             removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
             showDots={true}/>
        </SectionProductionMoleculeBody>
    )
}

export default Section; 
