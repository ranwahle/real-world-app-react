import ArticlesList from "../../components/articlesList/articlesList";
import { Header } from "../../components/header/header";
import { Tags } from "../../components/tags/tags";
import Styled from "./home.styled";
export const Home = () => {
  return (
    <>
      <Header />
      <Styled.PageContainer>
        <ArticlesList />
        <Styled.SidBar>
          <Tags />
        </Styled.SidBar>
      </Styled.PageContainer>
    </>
  );
};
