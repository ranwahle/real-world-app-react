import { IArticle } from "../../types/article";
import Styled from "./articleMeta.styled";

interface Props {
  article: IArticle;
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const ArticleMeta = ({ article }: Props) => {
  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    undefined,
    dateFormatOptions
  );
  return (
    <>
      <Styled.AuthorImage
        src={article.author.image}
        alt={article.author.username}
      />
      <Styled.Info>
        <>
          <Styled.AuthorName href={`#/profiles/${article.author.username}`}>
            {article.author.username}
          </Styled.AuthorName>
          {formattedDate}
        </>
      </Styled.Info>
      <Styled.FavoritedCount>
        <i className="ion-heart"> </i>
        {article.favoritesCount}
      </Styled.FavoritedCount>
    </>
  );
};

export default ArticleMeta;
