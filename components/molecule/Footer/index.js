import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FooterStc from "./Footer.stc";
import Courbe from "../../shared/CourbeOndulaire";
import SousTitre from "../../shared/SousTitre";
import Texte from "../../shared/Texte";
import MonImage from "../../shared/MonImage";
import ElementMenu from "../../shared/ELementMenu";
import LineFooter from "../../shared/LineFooter";
import Link from "next/link";

const Menus = [
  { lien: "/agency", texte: "Agency" },
  { lien: "/service", texte: "Services" },
  { lien: "/project", texte: "Projects" },
  { lien: "/journal", texte: "Journal" },
  { lien: "/contact", texte: "Contact" },
];

const Footer = (props) => {
  return (
    <FooterStc>
      <Container>
        <Row>
          <Col md={3}>
            <Link href="/">
              <MonImage chemin="/img/logoV.svg" largeur="100" hauteur="100" />
            </Link>
            <Courbe
              couleur="#fff"
              marge_bas="0"
              marge_haut="20"
              className="CourbeTestimonaial"
            />
            <Texte
              couleur="#fff"
              marge_bas="00"
              alignement="left"
              marge_haut="0"
            >
              DUBANI AGENGY est une agence digitale qui est
              spécialisée dans la création de contenus digitaux pour les
              entreprises, les institutions. C’est une agence de communication
              capable de créer des sites internet et de proposer toutes les
              prestations liées au webmarketing.
            </Texte>
          </Col>
          <Col md={6}>
            <diV className="divImage">
            <MonImage chemin="/img/map.png"  />
            </diV>
          </Col>
          <Col md={3} className="divMenu">
            <ul>
              {Menus.map((menu, index) => (
                <ElementMenu
                  couleur="#fff"
                  key={index}
                  taille="20px"
                  marge_bas="40px"
                  texte={menu.texte}
                  lien={menu.lien}
                />
              ))}
            </ul>
          </Col>
        </Row>
        <LineFooter
          epaisseur="2px"
          couleur_bordure="#ccc"
          marge_bas="40px"
          marge_haut="40px"
        />

        <Row className="priam">
          <Col md={6}>
            <Texte couleur="#fff" alignement="left">
              © 2021 dubaniagency. Tous droits reservés.
            </Texte>
          </Col>
          <Col md={6}>
            <Texte couleur="#fff" alignement="Right">
              Politique de confidentialité
            </Texte>
          </Col>
        </Row>
      </Container>
    </FooterStc>
  );
};

export default Footer;
