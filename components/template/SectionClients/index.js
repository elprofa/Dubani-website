import React from 'react';
import MoleculeHead from '../../molecule/MoleculeHeadSectionClient';
import MoleculeBody from '../../molecule/MoleculeBodySectionClient';
import {Row,Col} from "react-bootstrap";
import SectionClientStc from './SectionClient.stc';

const SectionClient = (props) => {
  return (
   
        <SectionClientStc>
           <Row>
                <Col lg={12}>
                    <MoleculeHead />    
                </Col>
                <Col lg={12}>
                    <MoleculeBody />    
                </Col>
                
           </Row>
        </SectionClientStc>    
  );
}

export default SectionClient; 