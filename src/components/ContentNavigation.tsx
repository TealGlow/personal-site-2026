import styled from "styled-components";
import { NavItems, type NavItemType } from "./ContentModels";

interface Props {
  currentNavItem: NavItemType;
  onNavItemClick: (item: NavItemType) => void;
}

const ContentNavigation = ({ currentNavItem, onNavItemClick }: Props) => {
  return (
    <Container>
      <NavItem
        onClick={() => onNavItemClick(NavItems.ABOUT)}
        className={currentNavItem === NavItems.ABOUT ? "active" : ""}
      >
        About
      </NavItem>
      <NavItem
        onClick={() => onNavItemClick(NavItems.RESUME)}
        className={currentNavItem === NavItems.RESUME ? "active" : ""}
      >
        Resume
      </NavItem>
      <NavItem
        onClick={() => onNavItemClick(NavItems.SKILLS)}
        className={currentNavItem === NavItems.SKILLS ? "active" : ""}
      >
        Skills
      </NavItem>
    </Container>
  );
};

export default ContentNavigation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 36px;

  margin-bottom: 20px;
`;

const NavItem = styled.span`
  width: 76px;
  display: flex;
  padding: 8px 6px 8px 0;

  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
