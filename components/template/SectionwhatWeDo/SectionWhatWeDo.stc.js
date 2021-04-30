import Styled from 'styled-components';

const SectionWhatWeDoStc=Styled.section`
     background-image: url(./img/binary.jpg);
    min-height:100vh;
    background-size:cover;
    @media (min-width: 991px) {
        background-size:100% auto;
    }
    padding-top:5%;
    padding-bottom:80px;

    .bottomWatWeDo
    {
        text-align:center;
        margin-top:20px;
    }
`;
export default SectionWhatWeDoStc;