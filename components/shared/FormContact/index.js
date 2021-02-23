import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
} from "reactstrap";
import FormContactStc from "./formContact.stc";
import Titre from "../Titre";
import SousTitre from '../SousTitre';
import InputGroup from "../InputGroup";
import Bouton from "../Bouton";
import { BiMapAlt, BiMobileAlt, BiEnvelope } from 'react-icons/Bi';
import { FaFacebookSquare, AiFillLinkedin, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const FormContact = (props) => {
  const { texte, backgroundcolor, color, icon } = props;

  return (
    <FormContactStc>
      <Container className='gauche'>
      <Card className='card-gauche'>
        <SousTitre texte='PARTNER WITH US' />
        <Titre texte="Let Us Help You Get Your Projet Started " color="#007bff" />
        <Row className='my-5'>
          <Col lg={12}>
            <span className='mb-2'><BiMapAlt className='my-2 mr-2' size={20} /> 45 A Street 13 Villa, Al Barsha 2</span><br/>
            <span className='my-2'><BiMobileAlt className='my-2 mr-2' size={20} /> +971 553776176</span><br/>
            <span className='my-2'><BiEnvelope className='my-2 mr-2' size={20}/> info@demo.com</span>
          </Col>
          </Row>

          <Row>
          <Col lg={12}>
              <SousTitre texte='SOCIAL MEDIA' color='#000000' className='my-5'/>
              <span className='my-4'><FaFacebookSquare className='' size={30} /> <FaLinkedin className='' size={30} /> <FaTwitterSquare className='' size={30}/> <FaInstagramSquare size={30} /></span>
          </Col>
        </Row>
      </Card>
      </Container>
      

      <Card className='card-droit'>
      <Container className='droit'>
        <Form>
          <Row>
            <Col lg={12}>
              <InputGroup textLabel="NOM" />
            </Col>
            <Col lg={12}>
              <InputGroup textLabel="E-MAIL" />
            </Col>

            <Col lg={12}>
              <InputGroup textLabel="PHONE NUMBER" />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <InputGroup
                typeInput="textarea"
                className="textareaContact"
                textLabel="VOTRE MESSAGE"
              />
            </Col>
          </Row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  I understand that LinkSture will securely hold my data in accordance with their Privacy Policy
              </Label>
            </FormGroup>
          </Col>

          <Row>
            <Col lg={12}>
              <Bouton texte="SUBMIT" bg="#0a2db0" couleur="#fff" />
            </Col>
          </Row>
        </Form>
      </Container>
      </Card>
    </FormContactStc>
  );
};

export default FormContact;