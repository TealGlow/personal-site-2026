import styled from "styled-components";
import ContentNavigation from "./ContentNavigation";
import { useState } from "react";
import {NavItems, type NavItemType } from "./ContentModels";
import About from "./About";
import Resume from "./Resume";

const Content = () => {
  const [currentNavItem, setCurrentNavItem] = useState<NavItemType>(
    NavItems.ABOUT,
  );

  const handleNavItemClick = (item: NavItemType) => {
    setCurrentNavItem(item);

  };

  return (
    <ContentContainer>
      <ContentNavigation
        currentNavItem={currentNavItem}
        onNavItemClick={handleNavItemClick}
      />
      <div>{buildContent(currentNavItem)}</div>
    </ContentContainer>
  );
};

export default Content;

const buildContent = (item: NavItemType) => {
  switch (item) {
    case NavItems.ABOUT:
      return <About />;
    case NavItems.RESUME:
      return <Resume />;
    case NavItems.SKILLS:
      return <div>Skills here</div>;
    default:
        throw new Error("Unknown content item");
  }
}

const ContentContainer = styled.div`
  width: 70%;
  height: 100%;

  overflow:hidden;

  margin-left: 40px;

  color: white;
`;
