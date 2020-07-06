import styled from "styled-components";

const Button = styled.button`
  display: ${props => props.display};
  padding: 0.3em 0.8em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #58a linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
  border-radius: 0.2em;
  box-shadow: 0 0.05em 0.25em rgba(0, 0, 0, 0.5);
  color: white;
  text-shadow: 0 -0.05em 0.05em rgba(0, 0, 0, 0.5);
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  transform: ${props => props.transform};
`;

export default Button;
