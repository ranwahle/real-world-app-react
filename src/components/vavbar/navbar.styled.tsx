import styled from "styled-components";
import containerStyle from "../../responsiveStyles/responsiveContainer";
import { defaultTheme } from "../../themes/default";

const Container = styled.div`
  padding: 0.5rem 1rem ${containerStyle};
`;

const NavbarBrand = styled.div`
  font-family: titillium web, sans-serif;
  font-size: 1.5rem;
  padding-top: 0;
  padding-bottom: 0.25rem;
  margin-right: 2rem;
  float: left;
  a {
    color: ${({ theme }) => `${theme.colors.primary}`};
    text-decoration: none;
  }
`;

const RightMenu = styled.ul`
  float: right;
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  float: left;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  margin-left: 1rem;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const End = styled.div`
  clear: both;
  clear: both;
`;

export default {
  Container,
  NavbarBrand,
  RightMenu,
  NavItem,
  End,
};
