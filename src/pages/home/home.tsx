import useGetArticles from "../../api/hooks/useGetArticles";
import { Header } from "../../components/header/header";
import { Tags } from "../../components/tags/tags";
import { useTranslation } from "../../hooks/useTranslation";
import Styled from "./home.styled";
import Article from "../../components/article/article";
import { IArticle } from "../../types/article";
export const Home = () => {
  const { t } = useTranslation();
  const { data: articles } = useGetArticles();
  return (
    <>
      <Header />
      <Styled.PageContainer>
        <Styled.FeedContainer>
          <Styled.TitleLink>{t("home.globalFeed")}</Styled.TitleLink>
          {(articles as IArticle[])?.map((article: any) => (
            <Article key={article.slug} article={article}></Article>
          ))}
        </Styled.FeedContainer>
        <Styled.SidBar>
          <Tags></Tags>
        </Styled.SidBar>
      </Styled.PageContainer>
    </>
  );
};
