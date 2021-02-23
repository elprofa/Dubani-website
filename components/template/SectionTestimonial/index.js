import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import SectionTestimonialStc from './SectionTestimonial.stc';
//import MoleculeTestimonial from '../../molecule/MoleculeTestimonial';
import Testimonial from '../../shared/Testimonial'
const SectionTestimonial = (props) => {
  return (
   
        <SectionTestimonialStc>
            <Container>
                <Row>
                <Col lg={1}>
                    </Col>
                    <Col lg={8}>
                        <Testimonial/>
                    </Col>
                    <Col lg={1}>
                    </Col>
                </Row>
            </Container>
              
        </SectionTestimonialStc>    
  );
}

export default SectionTestimonial; 