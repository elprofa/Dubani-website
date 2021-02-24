import Head from 'next/head'
import SectionAccueil from '../components/template/SectionAccueil';
import SectionProjects from '../components/template/SectionProjects';
import SectionProduction from '../components/template/SectionProduction';
import SectionClient from '../components/template/SectionClients';
import SectionTestimonial from '../components/template/SectionTestimonial';
import SectionWhatWeDo from '../components/template/SectionwhatWeDo';
import FormContact from '../components/shared/FormContact';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil/>
        <SectionProjects/>
        <SectionWhatWeDo/>
        <SectionProduction/>
        <SectionClient/>
        <FormContact/>
        <SectionTestimonial/>
      </main>

    </div>
  )
}



/**import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import MonImage from "../components/shared/MonImage";
import Bouton from "../components/shared/Bouton";
import { GrilleComponent } from "../components/shared/GrilleComponent";

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
      <Row>
        <Col sm={12}>
          <MonImage picture="/img/journal-image-un.svg" />
        </Col>
      </Row>
      <Container>
        <GrilleComponent
          position="right"
          texteTitre="XPATSA"
          colorTitre="#007bff"
          paragraphe="Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients."
          picture="/img/journal-image-un.svg"
        />
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
          <Bouton
            texte="COMMENCEZ MAITENANT "
            backgroundcolor="#007bff"
            bordercolor="007bff"
            color="#fff"
            icon="true"
          />
        </div>
        <GrilleComponent
          position="right"
          texteTitre="Dsponible dans 3 pays d'Afrique"
          colorTitre="#007bff"
          paragraphe="Etre la passerelle entre les parents et étudiants vivant à la reference en matière  de transaction monétaire venant de vos proches à moindre coût, de facon pratique et efficace, avec pour optique de construire dune relation pour la vie avec ses clients."
          picture="/img/register.jpg"
        />
      </Container>
    </Wrapper>
  );
}**/