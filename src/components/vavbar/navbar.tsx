import { StyledNavbar } from './navbar.styled';
export const Navbar = () => <>
    <StyledNavbar.Container>
        <StyledNavbar.NavbarBrand>
            <a href="/#/">conduit</a>
        </StyledNavbar.NavbarBrand>
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
        <StyledNavbar.End></StyledNavbar.End>
    </StyledNavbar.Container>
</>