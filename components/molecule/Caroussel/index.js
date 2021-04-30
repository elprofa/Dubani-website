import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MonImage from "../../shared/MonImage";
import CarousselStc from './Caroussel.stc';
import Bouton from '../../shared/Bouton';
import Titre from '../../shared/Titre';
import { BsArrowDown } from "react-icons/bs";
import Texte from '../../shared/Texte';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 120
  },
  tablet: {
    breakpoint: { max: 1024, min: 476 },
    items: 1,
    paritialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 476, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0
  }
};
const colors = [
  {chemin:"/img/gsn1.jpg",lien:"https://gsnauto.com/",titre:"GSN AUTO",resume:" GSN-AUTO est un garage automobile qui s'occupe de tous types de véhicules, voitures, poids lourds, motos,...Aujourd'hui, GSN-AUTO est satisfait d'avoir fait confiance à dubani Agency pour la conception et la réalisation de son site internet. "},
  {chemin:"/img/win.jpg",lien:"http://www.wintech.africa.com/",titre:"WINTECH TECHNOLOGY",resume:"  Wintec est une entreprise spécialisée dans la construction des infrastructures industrielles. Il accompagne tous les producteurs du Gabon dans des projets de développement pétrolier et gazier et met en œuvre des solutions techniques innovantes pour  assurer la performance et la pérennité des outils de production des producteurs locaux."},
  {chemin:"/img/xpatsa.jpg",lien:"https://xpatsa.com/",titre:"XPATSA",resume:"X-PATSA est une agence de transfert d'argent disponible en Afrique du Sud, au Gabon et au Maroc. Créer depuis presque 10 ans, x-patsa est l'un des premier à  nous avoir fait confiance. Disponible dans 3 pays d'Afrique, en partenariat avec l'opérateur téléphonique Airtel, x-patsa veut se positionner dans la sous région, dans un premier temps comme un partenaire incontournable dans son domaine."},
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      showDots={true}
    >
      {colors.map((element,index) => {
        return (
          <CarousselStc key={index} className="content">
             <MonImage chemin={element.chemin} />
             <div className="overlay">
                <div className="text">
                  <Titre texte={element.titre} couleur="#fff" taille="25px" />
                  <br/>
                  <Texte  couleur="#fff" taille="14px" marge_haut="40">
                    {element.resume}
                  </Texte>
                  <a href={element.lien} target="_blank">
                    <Bouton texte="SCROLL DOWN"
                      bg="transparent"
                      bg_after="transparent"
                      marge_haut="40px" 
                      couleur="#333" 
                      icon={<BsArrowDown />}
                  />
                </a>
                </div>
             </div>
          </CarousselStc>
        );
      })}
    </Carousel>
  );
};

export default Simple;
