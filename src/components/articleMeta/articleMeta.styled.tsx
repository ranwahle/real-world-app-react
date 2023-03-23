import styled from "styled-components";
import { BaseButton, PrimaryButton, SmallButton } from "../../styles/button";

const AuthorImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
`;
const AuthorName = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: block;
  &:hover {
    outline: 0;
    text-decoration: underline;
  }
`;
const Info = styled.div`
  margin: 0 1.5rem 0 0.3rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const FavoritedCount = styled.button`
  float: right;
  background: none;
  ${BaseButton}
  ${SmallButton}
  ${PrimaryButton}
`;

export default {
  AuthorImage,
  AuthorName,
  Info,
  FavoritedCount,
};
