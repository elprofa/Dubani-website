import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MonImage from "../../shared/MonImage";
import CarousselStc from './Caroussel.stc';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40
  }
};
const colors = [
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/register.jpg",lien:""},
  {chemin:"/img/register.jpg",lien:""}
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
          <CarousselStc key={index} >
             <MonImage chemin={element.chemin} />
          </CarousselStc>
        );
      })}
    </Carousel>
  );
};

export default Simple;
