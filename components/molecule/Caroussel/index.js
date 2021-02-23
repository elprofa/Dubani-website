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
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/workplace.jpg",lien:""}
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel className='carder' id='log'
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
                  <Titre texte="Salut a tous" couleur="#fff" taille="25px" />
                  <Texte  couleur="#fff" taille="14px">
                  Le lorem ipsum est, en imprimerie  
                 
                  </Texte>

                  <Texte  couleur="#fff" taille="14px" marge_haut="40">
                  Le lorem ipsum est, en imprimerie, une suite de mots sans 
                  signification utilisée à titre provisoire pour calibrer une mise en page,  
                  </Texte>
                  <Bouton texte="SCROLL DOWN"
                    bg="transparent"
                    bg_after="transparent"
                    marge_haut="40px" 
                    couleur="#333" 
                    icon={<BsArrowDown />}
                />
                </div>
             </div>
          </CarousselStc>
        );
      })}
    </Carousel>
  );
};

export default Simple;
