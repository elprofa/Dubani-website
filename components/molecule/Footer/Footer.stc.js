import React from 'react';
import Styled from 'styled-components';

const FooterStc=Styled.div`
    background:#000;
    padding-top:80px;
    padding-bottom:80px;

    .divMenu
    {
        text-align:right;
        @media (max-width: 768px) {
            display:none;
        }
    }

    .divImage
    {
        @media (max-width: 767px) {
           display:none
        }
    }

    .priam p
    {
        @media (max-width: 767px) {
           text-align:center !important;
        }
    }
    

    .divImage div
    {
        height:350px;
    }
`;
export default FooterStc;