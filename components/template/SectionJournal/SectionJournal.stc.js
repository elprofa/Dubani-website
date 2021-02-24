import React from 'react';
import {Container} from "react-bootstrap";
import Styled from 'styled-components';

const SectionJournalStc=Styled(Container)`
   padding-bottom:40px;
   height:100vh;
   padding-top:33%;

   @media (min-width: 525px) {
      padding-top:10%;
    }

   .row
   {
      margin:0px;
   }
`;
export default SectionJournalStc;