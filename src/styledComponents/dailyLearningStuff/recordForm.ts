import styled,{DefaultTheme} from "styled-components";

export const Div = styled.div`
  display: ${(props:DefaultTheme) => props.display};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  overflow: ${(props) => props.overflow};

  &:focus-within {
    border: ${(props) => props.focusBorder};
  }
`;

export const Input = styled.input.attrs({
  type: "text"
})`
  display: ${(props:DefaultTheme) => props.display};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};

  &:focus {
    color: ${(props) => props.focusColor};
    border: ${(props) => props.focusBorder};
    outline: ${(props) => props.focusOutline};
  }

  &:focus::-webkit-input-placeholder {
    // color: transparent;
  }
`;
