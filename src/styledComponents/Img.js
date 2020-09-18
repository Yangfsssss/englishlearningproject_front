import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: ${(props) => props.margin};
  /* background-color: #bfa; */
  transition: gray 0.25s;
`;

export const A = styled.a`
  display: inline-block;
  margin: ${(props) => props.margin};
  /* line-height:1; */
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
`;

export const Span = styled.span`
  width: 300px;
`;

export const Img = styled.img`
  /* display: none; */
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
    margin: 0 0 0 auto;
  }
`;

// export default Img;
