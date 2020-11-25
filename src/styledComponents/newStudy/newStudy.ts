import styled,{DefaultTheme} from "styled-components";

export const Li = styled.li`
  /* display: flex; */
  /* justify-content: space-between; */
  /* position: relative; */
  margin: ${(props:DefaultTheme) => props.margin};
  /* background-color: #bfa; */
  /* transition: gray 0.25s; */
`;

export const Span = styled.span`
  display: ${(props:DefaultTheme) => props.display};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: ${(props) => props.cursor};
`;

export const Img = styled.img`
  display: ${(props:DefaultTheme) => props.display};
  visibility:hidden;

  ${Li}:hover & {
    display: inline-block;
    visibility: visible;
    position: ${(props) => props.position};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    /* margin: ${(props) => props.margin}; */
    /* margin: 0 0 0 auto; */
  }
`;

export const Input = styled.input.attrs({
  type: "text"
})`
  display: ${(props:DefaultTheme) => props.display};
  font-size: ${(props) => props.fontSize};
  /* font-family: ${(props) => props.fontFamily}; */
  font-family: Georgia;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  margin-right:2px;
  padding: ${(props) => props.padding};
  /* border: ${(props) => props.border}; */
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};
  border-radius: 0.2em;
  overflow-wrap: break-word;
`;
