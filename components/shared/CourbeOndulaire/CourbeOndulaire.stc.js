import Styled from 'styled-components';


const CourbeStc=Styled.div`
    width:160px !important;
    -webkit-transform: rotate(7.55deg);
    -ms-transform:rotate(7.55deg);
    transform: rotate(7.55deg);

    /* width:150px; */
    span
    {
      font-size:50px;
      font-weight:400;
      color:${(props)=>props.couleur|| "#ccc"};
    }
    span.one {
        position: relative;
        right: 4px;
        top: 12px;
    }
    .two
    {
      position: relative;
      left: -11px;
    top: 10px;
    }

    .three
    {
      position: relative;
      left: -17px;
    top: 7px;
    }

    .four
    {
      position: relative;
      left: -24px;
    top: 5px;
    }
  
    
`;
export default CourbeStc;