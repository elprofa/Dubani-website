import React from 'react';
import MoleculeLeft from '../../molecule/MoleculeLeftSectionProject';
import MoleculeRight from '../../molecule/MoleculeRightSectionProject';
import {Row,Col,Container} from "react-bootstrap";
import SectionProjectStc from './SectionProjects.stc';

const SectionProjects = (props) => {
  return (
   
        <SectionProjectStc>
            <Container>
                <Row>
                    <Col lg={6}>
                        <MoleculeLeft/>
                    </Col>
                    <Col lg={6}>
                        <MoleculeRight/>
                    </Col>
                </Row>
            </Container>
        </SectionProjectStc>    
  );
}

export default SectionProjects;