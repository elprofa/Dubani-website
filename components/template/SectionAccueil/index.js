import React from 'react';
import MoleculeLeft from '../../molecule/MoleculeLeftSectionAccueil';
import MoleculeRight from '../../molecule/MoleculeRightSectionAccueil';
import {Row,Col} from "react-bootstrap";
import SectionAccueilStc from './SectionAccueil.stc';

const SectionAccueil = (props) => {
  return (
   
        <SectionAccueilStc>
           <Row>
            <Col lg={6}>
                    <MoleculeLeft/>
                </Col>
                <Col lg={6}>
                    <MoleculeRight/>
                </Col>
           </Row>
        </SectionAccueilStc>    
  );
}

export default SectionAccueil;