import styled from 'styled-components';
export const StyledHeader = {
    NavBar: styled.nav`
    padding: .5rem 1rem`,

    NavbarBrand: styled.a`
    font-family: titillium web,sans-serif;
    font-size: 1.5rem;
    padding-top: 0;
    margin-right: 2rem;
    color: #5cb85c;
    text-decoration: none;
    `
    , RightMenu: styled.ul`
    float: right;
    list-style: none;
    `
    , NavItem: styled.li`
    float: left;
    padding-top: 0.425rem;
    padding-bottom: 0.425rem;
    margin-left: 1rem;
    a {
        text-decoration: none;
        color: rgba(0,0,0,.3);
    }
    `
}