import * as S from "./ClientLayout.styled";
import { Header, Sidebar } from "@/widgets";

type ClientLayoutProps = React.PropsWithChildren;

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.PageContent>
        <Sidebar />
        <S.Main>
          <S.MainHeader>
            <S.MainTitleWrapper>
              <S.MainTitle>Строительно-монтажные работы</S.MainTitle>
            </S.MainTitleWrapper>
          </S.MainHeader>
          <S.MainContent>{children}</S.MainContent>
        </S.Main>
      </S.PageContent>
    </S.Container>
  );
}
