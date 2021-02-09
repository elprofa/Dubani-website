import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
const BoutonStc = styled(Button)`
  background: ${(props) => props.bg || "#ccc"};
  border: 1px solid ${(props) => props.couleurBordure || "transparent"};
  border-radius: 3px;
  color: ${(props) => props.couleur || "#fff"};
  min-width: ${(props) => props.largeurMin || "40px"} !important;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  font-size: 12px;
  @media (min-width: 900px) {
    min-width: 80px;
    min-height: 40px;
  }

  &:hover {
    color: ${(props) => props.couleur || "#fff"};
  }
  .badge {
    background: transparent;
    font-weight: 800;
    font-size: inherit;
    color: ${(props) => props.couleur || "#fff"};
  }
`;

export default BoutonStc;
