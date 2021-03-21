import React from 'react';
import {Container} from "react-bootstrap";
import Styled from 'styled-components';

const SectionAccueilStc=Styled(Container)`
   padding-bottom:40px;
   height:100vh;
   padding-top:33%;
   overflow:hidden;

   @media (max-height: 570px) {
        
        height:auto;
        overflow:auto;
    }

   @media (min-width: 525px) {
      padding-top:10%;
    }

   .row
   {
      margin:0px;
   }
`;
export default SectionAccueilStc;
