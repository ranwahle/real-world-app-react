import styled from "styled-components";

const tagItemPadding = "0.6em";

const TagItem = styled.a`
  padding-right: ${tagItemPadding};
  padding-left: ${tagItemPadding};
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  color: ${({ theme }) => theme.colors.tagColor};
`;

const TagsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tagsBackground};
  padding: ${({ theme }) => theme.spacing.tagContainerSpacing};
  border-radius: 14px;
`;

const TagList = styled.div``;

export default {
  TagItem,
  TagList,
  TagsContainer,
};
