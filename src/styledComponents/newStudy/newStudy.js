import styled from "styled-components";

export const Li = styled.li`
  /* display: flex; */
  /* justify-content: space-between; */
  /* position: relative; */
  margin: ${(props) => props.margin};
  /* background-color: #bfa; */
  /* transition: gray 0.25s; */
`;

export const Span = styled.span`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: ${(props) => props.cursor};
`;

export const Img = styled.img`
  display: ${(props) => props.display};
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
