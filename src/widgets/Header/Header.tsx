import { GridIcon, UndoIcon } from "@/shared/icons";
import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Header>
      <S.HeaderActions>
        <GridIcon />
        <UndoIcon />
      </S.HeaderActions>
      <S.HeaderTabs>
        <S.Tab active>Просмотр</S.Tab>
        <S.Tab>Управление</S.Tab>
      </S.HeaderTabs>
    </S.Header>
  );
}
