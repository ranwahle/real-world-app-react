import styled from "styled-components";
import { chip } from "../../styles/chip";

const TagItem = styled.a`
  ${chip}
  margin-bottom: 0.2rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  color: ${({ theme }) => theme.colors.tagColor};
  display: inline-block;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tagBackgroundHover};
  }
`;

const TagsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tagsBackground};
  padding: ${({ theme }) => theme.spacing.tagContainerSpacing};
  border-radius: 14px;
`;

const TagList = styled.div`
  font-size: 1rem;
`;

export default {
  TagItem,
  TagList,
  TagsContainer,
};
