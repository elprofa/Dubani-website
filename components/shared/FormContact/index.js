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
import Texte from "../Texte";
import SousTitre from '../SousTitre';
import InputGroup from "../InputGroup";
import Bouton from "../Bouton";
import { BiMapAlt, BiMobileAlt, BiEnvelope } from 'react-icons/Bi';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';

const FormContact = (props) => {
  const { texte, backgroundcolor, color, icon } = props;

  return (
    <FormContactStc>
      <Col lg={6}>
            <SousTitre 
                texte="PARTNER WITH US" 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"/>
            <Titre 
                texte="Let Us Help You Get " 
                poid_font="700"/>
            <Titre 
                texte="Your Projet Started" 
                poid_font="700"
                marge_bas="40px;"
                />

          
          <div className="iconFormContact">
              <span className='mb-2'><BiMapAlt className='my-2 mr-2' size={20} /> 45 A Street 13 Villa, Al Barsha 2</span><br/>
              <span className='my-2'><BiMobileAlt className='my-2 mr-2' size={20} /> +971 553776176</span><br/>
              <span className='my-2'><BiEnvelope className='my-2 mr-2' size={20}/> info@demo.com</span>
            </div>
            <div className="socialMedia">
                <SousTitre texte='SOCIAL MEDIA' color='#000000' marge_haut="40px" marge_bas="20px" className='my-5'/>
                <span >
                  <FaFacebookF className='' /> 
                </span>
                <span >
                  <FaLinkedinIn /> 
                </span>
                <span>
                  <FaTwitter/> 
                </span>
                <span>
                  <FaInstagram />
                </span>

            </div>
      </Col>

     <Col lg={6} className="light">
      <Texte marge_bas="40px" marge_haut="40px">
        Hello, Tell us about your project
      </Texte>
      <Form>
        <InputGroup label="Name" id="nom"/>
        <InputGroup label="E-mail" id="prenom" />
        <InputGroup label="Phone number" id="phone" />
        <InputGroup
            typeInput="textarea" label="Message" id="message" />
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
                I understand that LinkSture will securely hold my data in accordance with their Privacy Policy
            </Label>
          </FormGroup>
          <Bouton texte="SUBMIT" marge_haut='40px' bg="#ccc" bg_after="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" couleur="#fff" />
        </Form>
     </Col>
    </FormContactStc>
  );
};

export default FormContact;