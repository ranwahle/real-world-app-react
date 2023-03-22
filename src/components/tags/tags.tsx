import useGetTags from "../../api/hooks/useGetTags";
import { useTranslation } from "../../hooks/useTranslation";
import Styled from "./tags.styled";
export const Tags = () => {
  const { data: tagsData } = useGetTags();
  const { t } = useTranslation();
  console.log("tags", tagsData);
  return (
    <Styled.TagsContainer>
      {t("tags.popularTags")}
      <Styled.TagList>
        {tagsData?.tags?.map((tag: string) => (
          <Styled.TagItem key={tag}>{tag}</Styled.TagItem>
        ))}
      </Styled.TagList>
    </Styled.TagsContainer>
  );
};
