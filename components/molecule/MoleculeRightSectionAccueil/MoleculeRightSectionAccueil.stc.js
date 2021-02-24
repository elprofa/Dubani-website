import Styled from 'styled-components';

const SectionAccueilMoleculeRightStc=Styled.div`

    opacity: 1;
    transform: none !important;
    div {
    width: 500px;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    animation: fly 4s ease-in-out infinite;
    }

    @keyframes fly {
    0% {
        transform: translate(0%, -15%);
    }
    50% {
        transform: translate(0%, -5%);
    }
    100% {
        transform: translate(0%, -15%);
    }
    }
`;
export default SectionAccueilMoleculeRightStc;