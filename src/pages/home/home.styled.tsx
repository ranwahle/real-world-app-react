import styled from "styled-components";
import responsiveContainerStyles from "../../responsiveStyles/responsiveContainer";
import { baseButton, primaryHover, smallButton } from "../../styles/button";

const PageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.pageTop};
  display: flex;
  flex-wrap: wrap;
  ${responsiveContainerStyles}
`;

const SidBar = styled.div`
    @media (min-width: 768px) {
        flex: 0 0 25%;
        max-width: 25%;
`;

const Separator = styled.hr`
  color: ${({ theme }) => theme.colors.primary};
`;

export default {
  SidBar,
  PageContainer,
  Separator,
};
