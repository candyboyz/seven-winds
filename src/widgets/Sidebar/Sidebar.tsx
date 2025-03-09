import { ChevronDownIcon, PageIcon } from "@/shared/icons";
import * as S from "./Sidebar.styled";
import { PAGES } from "./Sidebar.consts";

export function Sidebar() {
  return (
    <S.Nav>
      <S.NavHeader>
        <S.NavTitle>
          <S.NavTitleText>Название проекта</S.NavTitleText>
          <S.NavSubtitle>Аббревиатура</S.NavSubtitle>
        </S.NavTitle>
        <ChevronDownIcon />
      </S.NavHeader>
      <S.NavList>
        {PAGES.map((page, index) => (
          <S.NavItem active={page === "СМР"} key={index}>
            <PageIcon />
            <S.NavItemText>{page}</S.NavItemText>
          </S.NavItem>
        ))}
      </S.NavList>
    </S.Nav>
  );
}
