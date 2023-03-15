import { css } from 'styled-components';
const ScreenWidth = {
    tabletMini: { screen: 544, maxWith: 500 },
    tablet: { screen: 768, maxWith: 720 },
    laptop: { screen: 992, maxWith: 940 },
    desktop: { screen: 1200 ,maxWith: 1140 },
}

const containerPadding = '15px';

export const containerStyle = css`
    ${Object.entries(ScreenWidth).sort((item1, item2) => {
        return item1[1].screen - item2[1].screen
    } ).map(([key, value]) => {
        return `
            @media (min-width: ${value.screen}px) {
                max-width: ${value.maxWith}px;
            }
        `
    })}
    margin-left: auto;
    margin-right: auto;
    padding-left: ${containerPadding};
    padding-right:  ${containerPadding};

`
