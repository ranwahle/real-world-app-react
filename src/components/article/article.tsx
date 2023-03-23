import { useTranslation } from "../../hooks/useTranslation";
import ArticleMeta from "../articleMeta/articleMeta";
import Styled from "./article.styled";

const Article = ({ article }: { article: any }) => {
  const { t } = useTranslation();
  return (
    <Styled.Container>
      <ArticleMeta article={article}></ArticleMeta>
      <Styled.Title>{article.title}</Styled.Title>
      <Styled.Description>{article.description}</Styled.Description>
      <Styled.ReadMore>{t("article.readMore")}</Styled.ReadMore>
    </Styled.Container>
  );
};

export default Article;