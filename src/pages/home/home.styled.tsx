import styled from "styled-components";
import responsiveContainerStyles from "../../responsiveStyles/responsiveContainer";

const PageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.pageTop};
  display: flex;
  flex-wrap: wrap;
  ${responsiveContainerStyles}
`;

const FeedContainer = styled.div`
  width: 67%;
`;
const SidBar = styled.div`
    @media (min-width: 768px) {
        flex: 0 0 25%;
        max-width: 25%;
`;

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
