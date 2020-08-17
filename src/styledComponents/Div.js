<<<<<<< HEAD
import styled from "styled-components";

const Div = styled.div`
  display:${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-right:${(props) => props.borderRight};
  border-radius:${(props) => props.borderRadius};
  /* position: ${(props) => props.position}; */
  position:${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  overflow:${(props) => props.overflow};

  &:focus-within{
    border:${(props) => props.focusBorder};
  }

  /* transform:translate(-50%,-50%); */
`;

export default Div;
=======
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
>>>>>>> f84a09d8a845db7561f7f79ad27ffef13ce2c76c
