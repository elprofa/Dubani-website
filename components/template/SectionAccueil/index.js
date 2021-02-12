import React from 'react';
import MoleculeLeft from '../../molecule/MoleculeLeftSectionAccueil';
import MoleculeRight from '../../molecule/MoleculeRightSectionAccueil';
import {Row,Col} from "react-bootstrap";
import SectionAccueilStc from './SectionAccueil.stc';
import MoleculeBottom from '../../molecule/MoleculeBottomSectionAccueil';

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
            <MoleculeBottom />
        </SectionAccueilStc>    
  );
}

export default SectionAccueil;