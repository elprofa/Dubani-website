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
import SousTitre from "../SousTitre";
import InputGroup from "../InputGroup";
import Bouton from "../Bouton";
import { BiMapAlt, BiMobileAlt, BiEnvelope } from "react-icons/bi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const FormContact = (props) => {
  const { texte, backgroundcolor, color, icon } = props;

  return (
    

    <FormContactStc>
      <Col lg={6}>
        <SousTitre
          texte="PARTENAIRE AVEC NOUS"
          marge_haut="30px"
          marge_bas="20px"
          poid_font="400"
        />
        <Titre texte="Laissez-nous vous aider " poid_font="700" />
        <Titre texte="à commencer Votre projet " poid_font="700" marge_bas="40px;" />

        <div className="iconFormContact">
          <span className="mb-2">
            <BiMapAlt className="my-2 mr-2" size={20} /> 31 allee des pruniers, Casablanca
          </span>
          <br />
          <span className="my-2">
            <BiMobileAlt className="my-2 mr-2" size={20} /> +212 707 187 736
          </span>
          <br />
          <span className="my-2">
            <BiEnvelope className="my-2 mr-2" size={20} /> info@dubaniagency.com
          </span>
        </div>
        <div className="socialMedia">
          <SousTitre
            texte="RESEAUX SOCIAUX"
            color="#000000"
            marge_haut="40px"
            marge_bas="20px"
            className="my-5"
          />
         
          <span>
            <a href="https://www.facebook.com/dubaniagency" target="_blank" style={{color:"#fff"}}>
              <FaFacebookF className="" />
              </a>
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </Col>

      <Col lg={6} className="light">
        <Texte marge_bas="40px" marge_haut="40px">
          Hey,Raconte nous un peu plus sur ton projet

        </Texte>
        <Form>
          <InputGroup label="Nom complet" id="nom" />
          <InputGroup label="E-mail" id="email" />
          <InputGroup label="Téléphone" id="phone" />
          <InputGroup typeInput="textarea" label="Message" id="message" />
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Je comprends que dubani
              conserver mes données en toute sécurité conformément à leur politique de confidentialité
            </Label>
          </FormGroup>
          <Bouton
            texte="Envyer"
            marge_haut="40px"
            bg="#ccc"
            bg_after="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
            couleur="#fff"
          />
        </Form>
      </Col>
    </FormContactStc>
  );
};

export default FormContact;
