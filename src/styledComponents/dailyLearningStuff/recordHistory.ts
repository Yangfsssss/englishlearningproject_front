import styled,{DefaultTheme} from "styled-components";

export const Li = styled.li`
  /* display: flex; */
  /* justify-content: space-between; */
  position: relative;
  /* height: 42px; */
  margin: ${(props:DefaultTheme) => props.margin};
  margin-bottom: 10px;
  /* background-color: #bfa; */
  /* transition: gray 0.25s; */
`;

export const A = styled.a`
  display: inline-block;
  width: ${(props:DefaultTheme) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  /* line-height:1; */
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
`;

export const Span = styled.span`
  display: inline-block;
  width: ${(props:DefaultTheme) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  /* text-align: center; */
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
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
  width: ${(props:DefaultTheme) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  visibility: hidden;

  ${Li}:hover & {
    display: inline-block;
    visibility: visible;
  }
`;
