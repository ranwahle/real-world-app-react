import { css } from "styled-components";

export const baseButton = css`
  cursor: pointer;
  border: 1px solid transparent;
`;

export const smallButton = css`
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  font-weight: 300;
`;

export const activeButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const primaryHover = css`
  &:hover {
    ${activeButton}
  }
`;

export const primaryButton = css`
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  ${primaryHover}
`;
