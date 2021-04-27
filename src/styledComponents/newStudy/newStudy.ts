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
  padding: ${(props) => props.padding};
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
  type: "text",
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

export const StyledButton = styled.button`
  /* display: ${(props:DefaultTheme) => props.display}; */
  /* padding: 0.3em 0.8em; */
  /* border: none; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
  border-radius: 0.2em;
  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);
  font-size: 2em;
  /* line-height: ${(props) => props.height}; */
  color: white;
  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);
  width:120px;
  height:54px;
  /* margin: ${(props) => props.margin}; */
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  /* transform: ${(props) => props.transform}; */
  /* text-align:center; */
  /* vertical-align: middle; */
  /* box-sizing: border-box; */
`;