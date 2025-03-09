import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--background-color);
`;

const PageContent = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  background-color: var(--background-color);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--header-background);
  border-bottom: 1px solid var(--border-color);
`;

const MainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 15px;
  border-right: 1px solid var(--border-color);
`;

const MainTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

const MainContent = styled.div`
  padding: 10px;
`;

export {
  Container,
  Main,
  MainTitleWrapper,
  MainHeader,
  MainTitle,
  MainContent,
  PageContent,
};
