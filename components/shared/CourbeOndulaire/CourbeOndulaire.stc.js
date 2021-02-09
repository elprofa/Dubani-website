import Styled from 'styled-components';


const CourbeStc=Styled.div`
    width:150px;
    transform: rotate(3deg);

    /* width:150px; */
    span
    {
      font-size:50px;
      font-weight:100;
      color:${(props)=>props.couleur|| "#ccc"};
    }
    span.one {
        position: relative;
        right: 0px;
    }
    .two
    {
      position: relative;
      left: -15px;
      top: -1px;
    }

    .three
    {
      position: relative;
      left: -30px;
      top: -2px;
    }

    .four
    {
      position: relative;
      left:-45px;
      top:-3px;
    }
  
    
`;
export default CourbeStc;