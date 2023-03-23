import styled from "styled-components";

const tagItemSidePadding = "0.6em";
const tagItemTopBottomPadding = "0.1rem";

const TagItem = styled.a`
  padding-right: ${tagItemSidePadding};
  padding-left: ${tagItemSidePadding};
  padding-top: ${tagItemTopBottomPadding};
  padding-bottom: ${tagItemTopBottomPadding};
  border-radius: 10rem;
  margin-right: 3px;
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
