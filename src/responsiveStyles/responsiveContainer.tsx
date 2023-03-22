import { css } from "styled-components";

const containerStyle = css`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => `${theme.spacing.default}`};
  padding-right: ${({ theme }) => `${theme.spacing.default}`};

  @media (min-width: 544px) {
    max-width: 500px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 940px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
export default containerStyle;
