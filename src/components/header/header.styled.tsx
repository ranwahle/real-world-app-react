import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 2rem;
  margin-bottom: 0;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
  h1 {
    font-size: 3.5rem;
    text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    font-weight: 700;
    padding-bottom: 0.5rem;
    margin: 0;
    line-height: 1.1;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export default StyledHeader;
