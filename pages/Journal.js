import Link from "next/link";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import MonImage from "../components/shared/MonImage";
import Bouton from "../components/shared/Bouton";
import GrilleComponent from "../components/shared/grilleComponent/grilleComponent";
import SectionJournal from '../components/template/SectionJournal';

const Wrapper = styled.div`
  .row {
    margin: 0px;
  }

  button {
    margin: 20px auto;
    display: block;
  }

  .divMiddle {
    background: #f8f8f8;
    padding-bottom: 20px;
  }
`;

const ListeGrille = [
  {
    position: "left",
    texteTitre: "Aide aux etudiants",
    colorTitre: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
    picture: "/img/register.jpg",
  },
  {
    position: "left",
    texteTitre: "Aides médicales",
    colorTitre: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
    picture: "/img/register.jpg",
  },
  {
    position: "left",
    texteTitre: "Aide pour VISA et Carte de séjours",
    colorTitre: "#007bff",
    paragraphe:
      "Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients.",
    picture: "/img/register.jpg",
  },
];

export default function Journal() {
  return (
    <Wrapper>
      <SectionJournal/>
      <Container>
      <Row>
        <Col lg={1} className='onglet'>All</Col>
        <Col lg={1}  className='onglet'>2020</Col>
        <Col lg={1} className='onglet'>2021</Col> 
      </Row>
        <div className="divMiddle">
          {ListeGrille.map((grille) => (
            <GrilleComponent
              key={grille.texteTitre.length}
              position={grille.position}
              texteTitre={grille.texteTitre}
              colorTitre={grille.colorTitre}
              paragraphe={grille.paragraphe}
              picture={grille.picture}
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}