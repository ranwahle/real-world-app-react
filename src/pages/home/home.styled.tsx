import styled from "styled-components";
import responsiveContainerStyles from "../../responsiveStyles/responsiveContainer";

const PageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.pageTop};
  display: flex;
  ${responsiveContainerStyles}
`;

const FeedContainer = styled.div`
  width: 67%;
`;
const SidBar = styled.div``;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export default {
  FeedContainer,
  SidBar,
  PageContainer,
  TitleLink,
};
