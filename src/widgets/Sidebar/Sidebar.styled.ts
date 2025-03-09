import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--header-background);
  border-right: 1px solid var(--border-color);
  max-width: 234px;
  width: 100%;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 7px 7px 7px 20px;
  border-bottom: 1px solid var(--border-color);
`;

const NavTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavTitleText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: var(--active-background);
`;

const NavSubtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: var(--active-background);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  color: ${({ active }) => (active ? "var(--active-color)" : "inherit")};
  background-color: ${({ active }) =>
    active ? "var(--active-background)" : "transparent"};
  &:hover {
    background-color: var(--hover-background);
  }
`;

const NavItemText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export {
  Nav,
  NavHeader,
  NavTitle,
  NavTitleText,
  NavSubtitle,
  NavList,
  NavItem,
  NavItemText,
};
