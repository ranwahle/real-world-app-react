import { StyledHeader } from './header.styled';
export const Header = () => <>
    <StyledHeader.NavBar>
        <StyledHeader.NavbarBrand href="/#/">Conduit</StyledHeader.NavbarBrand>
        <StyledHeader.RightMenu>
            <StyledHeader.NavItem>
                <a href='/#/'>Home</a>
            </StyledHeader.NavItem>
            <StyledHeader.NavItem>
                <a>
                    Sign in
                </a>
            </StyledHeader.NavItem>
            <StyledHeader.NavItem>
                <a>
                    Sign up
                </a>
            </StyledHeader.NavItem>
        </StyledHeader.RightMenu>
    </StyledHeader.NavBar>
</>