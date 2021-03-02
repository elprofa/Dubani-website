import Styled from 'styled-components';

const CarousselStc=Styled.div`

    width:400px;
    height:200px;
    @media (min-width: 476px) {
        height:400px;
    }

    &:first-child
    {
        margin: 0px;
        display: block;
        /* width: 100%; */
        //height: auto;
    }

    &:hover .overlay {
        opacity: 1;
    }

    .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
   
    /* margin-right: 40px; */
    background-image: url(./img/technology1.jpg);
    background-size:cover;
    }

    .text
    {
        background: rgb(32, 77, 164,.8);
        height: 100%;
        padding: 40px;
        padding-top: 80px;

        & button
        {
            float:right;
        }
    }
`;
export default CarousselStc;