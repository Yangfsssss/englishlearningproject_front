import styled from "styled-components";

export const Li = styled.li`
  /* display: flex; */
  /* justify-content: space-between; */
  position: relative;
  margin: ${(props) => props.margin};
  /* background-color: #bfa; */
  /* transition: gray 0.25s; */
`;

export const A = styled.a`
  display: inline-block;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  /* line-height:1; */
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
`;

export const Span = styled.span`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: ${(props) => props.cursor};
`;

// export const Div = styled.div`
//   display: inline-block;
//   position: relative;
// `;

export const Img = styled.img`
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  visibility: hidden;

  ${Li}:hover & {
    display: inline-block;
    visibility: visible;
  }
`;
