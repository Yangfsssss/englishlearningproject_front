import styled from "styled-components";

const Div = styled.div`
  /* display:${props => props.display}; */
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  /* position: ${props => props.position}; */
  left: ${props => props.left};
  top: ${props => props.top};
  /* transform: ${props => props.transform}; */
  position:absolute;
  /* transform:translate(-50%,-50%); */
`;

export default Div;
