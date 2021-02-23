import Styled from 'styled-components';

const SectionStc=Styled.section`
    padding-top:10%;
    @media (max-width: 767px)         
    {
        padding-top:15%;
    }
    @media (max-width: 476px)         
    {
        padding-top:30%;
    }
    margin-bottom:40px;

    .thumbnail
    {
        height:600px;
        overflow:hidden;
    }

    .shareIcon {
        text-align: right;
        width: 100%;
        margin-top: -50px;
        position: relative;
        z-index: 99;
        padding: 0px 20px;
    }
    .shareIcon span
    {
        background: #fff;
    padding: 8px 10px;
    font-size: 10px;
    color: #000;
    margin-right: 5px;
    cursor:pointer;
    }

`;

export default SectionStc;