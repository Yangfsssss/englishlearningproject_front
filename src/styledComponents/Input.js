import styled from "styled-components";

const Input = styled.input.attrs({
  placeholder: "",
  type: "text"
})`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default Input;
