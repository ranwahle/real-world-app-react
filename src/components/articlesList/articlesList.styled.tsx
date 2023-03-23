import styled from "styled-components";

const FeedContainer = styled.div`
  width: 67%;
  padding-left: ${({ theme }) => theme.spacing.containerSidePadding};
  padding-right: ${({ theme }) => theme.spacing.containerSidePadding};
`;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export default {
  FeedContainer,
  TitleLink,
};
