import styled from "styled-components";
import { chip } from "../../styles/chip";

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;

const Title = styled.h1`
    font-weight: ${({ theme }) => theme.typography.articleTitle.weight}};
    font-size: ${({ theme }) => theme.typography.articleTitle.size};
    margin-bottom: 3px;
    color: ${({ theme }) => theme.colors.articleTitle};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const ReadMore = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};
`;

const Tag = styled.li`
  ${chip}
  color: ${({ theme }) => theme.colors.text};
`;

const TagsList = styled.ul`
  float: right;
  list-style: none;
  display: flex;
`;

export default {
  Container,
  Title,
  Description,
  ReadMore,
  Tag,
  TagsList,
};
