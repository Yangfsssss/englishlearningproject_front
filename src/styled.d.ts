import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    display?: string;
    justifyContent?: string;
    visibility?: string;
    backgroundColor?: string;
    width?: string;
    minWidth?: string;
    height?: string;
    position?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    transform?: string;
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    margin?: string;
    marginRight?: string;
    marginBottom?: string;
    padding?: string;
    border?: string;
    borderRight?: string;
    verticalAlign?: string;
    overflow?: string;
    textAlign?: string;
    lineHeight?: string;
    cursor?: string;
    boxSizing?: string;

    focusBorder?: string;
    focusColor?: string;
    focusOutline?: string;
    textDecoration?: string;
    flexDirection?: string;
  }
}
