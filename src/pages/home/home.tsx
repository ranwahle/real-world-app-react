import { Header } from "../../components/header/header";
import { Tags } from "../../components/tags/tags";
import { useTranslation } from "../../hooks/useTranslation";
import Styled from "./home.styled";
export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Styled.PageContainer>
        <Styled.FeedContainer>
          <Styled.TitleLink>{t("home.globalFeed")}</Styled.TitleLink>
        </Styled.FeedContainer>
        <Styled.SidBar>
          <Tags></Tags>
        </Styled.SidBar>
      </Styled.PageContainer>
    </>
  );
};
