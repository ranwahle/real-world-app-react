import { useState } from "react";
import useGetArticles from "../../api/hooks/useGetArticles";
import { useTranslation } from "../../hooks/useTranslation";
import { IArticle } from "../../types/article";
import Article from "../article/article";
import Pagination from "../pagination/pagination";
import Styled from "./articlesList.styled";

const ArticlesList = () => {
  const [pageNum, setPageNum] = useState(1);
  const { t } = useTranslation();
  const { data: articleResponse } = useGetArticles(10, (pageNum - 1) * 10);
  const { articles, articlesCount } = articleResponse || {};
  const totalPages = Math.ceil(articlesCount / 10);
  return (
    <Styled.FeedContainer>
      <Styled.TitleLink>{t("home.globalFeed")}</Styled.TitleLink>
      {(articles as IArticle[])?.map((article: any) => (
        <Article key={article.slug} article={article}></Article>
      ))}
      <Pagination
        currentPage={pageNum}
        totalPages={totalPages}
        pageSelected={setPageNum}
      ></Pagination>
    </Styled.FeedContainer>
  );
};

export default ArticlesList;
