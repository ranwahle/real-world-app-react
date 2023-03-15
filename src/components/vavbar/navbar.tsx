import { StyledNavbar } from './navbar.styled';
export const Header = () => <>
    <StyledNavbar.Container>
        <StyledNavbar.NavbarBrand href="/#/">Conduit</StyledNavbar.NavbarBrand>
        <StyledNavbar.RightMenu>
            <StyledNavbar.NavItem>
                <a href='/#/'>Home</a>
            </StyledNavbar.NavItem>
            <StyledNavbar.NavItem>
                <a>
                    Sign in
                </a>
            </StyledNavbar.NavItem>
            <StyledNavbar.NavItem>
                <a>
                    Sign up
                </a>
            </StyledNavbar.NavItem>
        </StyledNavbar.RightMenu>
    </StyledNavbar.Container>
</>