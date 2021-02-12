import Styled from 'styled-components';


const CourbeStc=Styled.div`
    width:150px !important;
    -webkit-transform: rotate(18.5deg);
    -ms-transform: rotate(18.5deg);
    transform: rotate(18.5deg);

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
      left: -17.5px;
      top: 5px;
    }

    .three
    {
      position: relative;
      left: -31px;
      top: -2px;
    }

    .four
    {
      position: relative;
      left: -44.5px;
      top: -9px;
    }
  
    
`;
export default CourbeStc;