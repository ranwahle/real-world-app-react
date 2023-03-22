import { useTranslation } from "../../hooks/useTranslation";
import StyledHeader from "./header.styled";

export const Header = () => {
    const { t } = useTranslation();
  return    <StyledHeader>
        <h1>{t('header.companyName')}</h1>
      <p>{t('header.subtitle')}
        </p>
    </StyledHeader>
}
    
