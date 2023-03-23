import { useTranslation } from "../../hooks/useTranslation";
import StyledNavbar from "./navbar.styled";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledNavbar.Container>
        <StyledNavbar.NavbarBrand>
          <a href="/#/">{t("header.companyName")}</a>
        </StyledNavbar.NavbarBrand>
        <StyledNavbar.RightMenu>
          <StyledNavbar.NavItem>
            <a href="/#/">{t("navigationMenu.home")}</a>
          </StyledNavbar.NavItem>
          <StyledNavbar.NavItem>
            <a>{t("navigationMenu.signIn")}</a>
          </StyledNavbar.NavItem>
          <StyledNavbar.NavItem>
            <a>{t("navigationMenu.signUp")}</a>
          </StyledNavbar.NavItem>
        </StyledNavbar.RightMenu>
        <StyledNavbar.End></StyledNavbar.End>
      </StyledNavbar.Container>
    </>
  );
};

export default Navbar;
