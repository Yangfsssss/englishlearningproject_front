import styled from "styled-components";

const Textarea = styled.textarea`
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};
  resize: none;

  &:focus {
    color: ${(props) => props.focusColor};
    border: ${(props) => props.focusBorder};
    outline: ${(props) => props.focusOutline};
  }
`;

export default Textarea;
