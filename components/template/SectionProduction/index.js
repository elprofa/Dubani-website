import React from 'react';
import MoleculeHead from '../../molecule/MoleculeHeadSectionProduction';
import MoleculeBody from '../../molecule/MoleculeBodySectionProduction';
import {Row,Col,Container} from "react-bootstrap";
import SectionProductionStc from './SectionProduction.stc';

const SectionProduction = (props) => {
  return (
   
        <SectionProductionStc>
           <Container>
                <Row>
                    <Col lg={12}>
                        <MoleculeHead />
                    </Col>
                    <Col lg={12}>
                        <MoleculeBody />
                    </Col>
                </Row>
           </Container>
           
        </SectionProductionStc>    
  );
}

export default SectionProduction; 