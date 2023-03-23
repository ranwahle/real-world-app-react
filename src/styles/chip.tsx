import { css } from "styled-components";

const chipSidePadding = "0.6em";
const chipTopBottomPadding = "0.1rem";

export const chip = css`
  padding-right: ${chipSidePadding};
  padding-left: ${chipSidePadding};
  padding-top: ${chipTopBottomPadding};
  padding-bottom: ${chipTopBottomPadding};
  border-radius: 10rem;
  font-size: ${({ theme }) => theme.typography.small};
  border: 1px solid #ddd;
  margin-right: 3px;
`;
