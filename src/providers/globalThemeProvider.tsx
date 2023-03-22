import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../themes/default";

export const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
