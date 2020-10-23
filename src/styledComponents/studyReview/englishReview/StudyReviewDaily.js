import styled from "styled-components";

export const Div = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-left: 2px solid transparent;
  border-right: ${(props) => props.borderRight};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  overflow: ${(props) => props.overflow};

  :hover& {
    border-left: 2px solid black;
    /* color: lightblue; */
  }
`;

export const Span = styled.span`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  overflow-wrap: break-word;
  cursor: ${(props) => props.cursor};
`;
