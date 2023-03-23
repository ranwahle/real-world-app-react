import useGetTags from "../../api/hooks/useGetTags";
import { useTranslation } from "../../hooks/useTranslation";
import Styled from "./tags.styled";
export const Tags = () => {
  const { data: tagsData } = useGetTags();
  const { t } = useTranslation();
  return (
    <Styled.TagsContainer>
      <p>{t("tags.popularTags")}</p>
      <Styled.TagList>
        {tagsData?.tags?.map((tag: string) => (
          <Styled.TagItem href="#" key={tag}>
            {tag}
          </Styled.TagItem>
        ))}
      </Styled.TagList>
    </Styled.TagsContainer>
  );
};
