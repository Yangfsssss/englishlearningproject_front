import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
  `;

export const Div = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-right: ${(props) => props.borderRight};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  overflow: ${(props) => props.overflow};
`;

export const Input = styled.input.attrs({
  type: "text"
})`
  display: ${(props) => props.display};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};
`;

export const StyledButton = styled.button`
  display: ${(props) => props.display};
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
  margin: ${(props) => props.margin};
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  vertical-align: middle;
  box-sizing: content-box;
`;

export const Textarea = styled.textarea`
  display: ${(props) => props.display};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  vertical-align: ${(props) => props.verticalAlign};
  resize: none;

  /* &:focus {
    color: ${(props) => props.focusColor};
    border: ${(props) => props.focusBorder};
    outline: ${(props) => props.focusOutline};
  } */
`;

export const Span = styled.span`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: ${(props) => props.cursor};
`;
