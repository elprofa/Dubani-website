import styled from "styled-components";

import { FormGroup } from "reactstrap";

export const FormWarp = styled(FormGroup)`

margin:40px 0px;

& .input-field {
  position: relative;
  height: 44px;
  line-height: 15px;
}
& label {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  color: #333;
  font-size:16px;
  transition: 0.2s all;
  cursor: text;
}
& input {
  width: 100%;
  border: 0;
  outline: 0;
  background:transparent !important;
  padding: 0.5rem 0;
  border-bottom: 2px solid #ccc !important;
  box-shadow: none;
  color: #111;
}
& input:invalid {
  outline: 0;
  // color: #ff2300;
  //   border-color: #ff2300;
}
& input:focus,& input:valid {
  border:0px;
}
& input:focus~label,& input:valid~label {
  font-size: 14px;
  top: -24px;
  color: #07409d;
  
}

`;
