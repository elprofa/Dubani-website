import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MonImage from "../../shared/MonImage";
import CarousselStc from './MoleculeBodySectionProduction.stc';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 40
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
    <div className='wrapper'>
    <Carousel className='card'
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      showDots={true}
    >
      {colors.map((element,index) => {
        return (
          <CarousselStc key={index} >
             <MonImage chemin={element.chemin} />
            <div className='info'>
              <h1>Titre</h1>
              <p>Lorem ipsum is simple and so good</p>
              <a href='#' className='btn'>Read more</a>
            </div>
             
          </CarousselStc>
        );
      })}
    </Carousel>
    </div>
  );
};

export default Simple;
