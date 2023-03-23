import { css } from "styled-components";

export const BaseButton = css`
  cursor: pointer;
  border: 1px solid transparent;
`;

export const SmallButton = css`
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  font-weight: 300;
`;

export const PrimaryButton = css`
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
