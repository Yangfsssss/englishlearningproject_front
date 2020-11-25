import styled,{DefaultTheme} from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: ${(props:DefaultTheme) => props.flexDirection};
  transform: ${(props) => props.transform};
`;

export const StyledButton = styled.button`
  display: ${(props:DefaultTheme) => props.display};
  padding: 0.3em 0.8em;
  /* border: none; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
  border-radius: 0.2em;
  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);
  font-size: 2em;
  line-height: ${(props) => props.height};
  color: white;
  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 0 10px 0;
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  vertical-align: middle;
  box-sizing: content-box;
`;
