import Styled from 'styled-components';

const CarousselStc=Styled.div`

    width:400px;
    height:200px;
    position:relative;
    padding:0;
    display:block;
    cursor:pointer;
    overflow:hidden;

    .react-multi-carousel-list 
    {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 20%;
    }

    .info {
    position:relative;
    padding:0;
    opacity: 0;
    overflow:hidden; 
    width: auto;
    height: inherit;
    -webkit-transition: all 400ms ease-out;
      -moz-transition: all 400ms ease-out;
      -o-transition: all 400ms ease-out;
      -ms-transition: all 400ms ease-out;
      transition: all 400ms ease-out;
      text-align:center;
    }
    .info:hover {
        opacity: 1;
        transition: 0.7s;
        cursor:pointer;
        background: rgba(0, 0, 255, 0.5);
        background-size: cover;
        color: #fff;
    }
    .info.                  p:hover{
     transform: translateY(250px);
      -webkit-transform: translateY(250px);
    }
    .info.btn:hover {
        color: #fff;
    }

    
    @media (min-width: 476px) {
        height:400px;
    }
    
    div 
    {
        @media (min-width: 476px) {
            margin-right:40px !important;
        }
    }
`;
export default CarousselStc;
