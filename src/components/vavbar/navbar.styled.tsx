import styled from 'styled-components';
import { containerStyle } from '../../responsiveStyles/responsiveContainer';
import { defaultTheme } from '../../themes/default';
export const StyledNavbar = {

    Container: styled.div`
    padding: .5rem 1rem
    ${containerStyle}
    `,

    NavbarBrand: styled.div`
    font-family: titillium web,sans-serif;
    font-size: 1.5rem;
    padding-top: 0;
    padding-bottom: 0.25rem;
    margin-right: 2rem;
    float: left;
    a {
        color: var(--color-primary);
        text-decoration: none;

    }
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
    , End: styled.div`
    clear: both;clear: both`
}