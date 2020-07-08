import styled from "styled-components";

const Input = styled.input.attrs({
  placeholder: "",
  type: "text"
})`
  /* display: block; */
  font-size: 3em;
  width: ${props => props.width};
  height: ${props => props.height};
  line-height: ${props => props.height};
  /* border: none; */
  vertical-align: middle;
`;

export default Input;
