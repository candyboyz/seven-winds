import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 28px;
  background-color: var(--header-background);
  padding: 0 20px;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.div<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  padding: 10px 4px;
  color: ${({ active }) =>
    active ? "var(--text-color)" : "var(--active-background)"};
  border-bottom: ${({ active }) => (active ? "2px solid #fff" : "none")};
  cursor: pointer;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
`;

const HeaderTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export { Header, Tab, HeaderActions, HeaderTabs };
