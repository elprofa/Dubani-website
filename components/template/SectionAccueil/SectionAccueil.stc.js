import React from 'react';
import {Container} from "react-bootstrap";
import Styled from 'styled-components';

const SectionAccueilStc=Styled(Container)`
   padding-bottom:40px;
   height:100vh;
   padding-top:30%;

   @media (min-width: 476px) {
      padding-top:15%;
    }

   .row
   {
      margin:0px;
   }
`;
export default SectionAccueilStc;
