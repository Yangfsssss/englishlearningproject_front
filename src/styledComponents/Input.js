import styled from "styled-components";

const InputS = styled.input.attrs({
  type: "text"
})`
  display: ${(props) => props.display};
  font-family:${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};
  /* overflow: ${(props) => props.overflow}; */

  &:focus {
    color: ${(props) => props.focusColor};
    border: ${(props) => props.focusBorder};
    outline: ${(props) => props.focusOutline};
  }

  &:focus::-webkit-input-placeholder {
    // color: transparent;
  }
`;

export default InputS;
