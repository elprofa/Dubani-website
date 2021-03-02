import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import SectionTestimonialStc from './SectionTestimonial.stc';
import MoleculeTestimonial from '../../molecule/MoleculeTestimonial';

const SectionTestimonial = (props) => {
  return (
   
        <SectionTestimonialStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <MoleculeTestimonial/>
                    </Col>
                </Row>
            </Container>
              
        </SectionTestimonialStc>    
  );
}

export default SectionTestimonial; 