import styled from "styled-components";
import {
  activeButton,
  baseButton,
  primaryHover,
  smallButton,
} from "../../styles/button";

const Pages = styled.div`
  clear: both;
`;

const Page = styled.button`
  &.active {
    ${activeButton}
  }
  ${baseButton}
  ${smallButton}
${primaryHover}
background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.lightText};
  padding: 0.5rem 0.75rem;
  float: left;
  margin-left: -1px;
`;

export default {
  Pages,
  Page,
};
