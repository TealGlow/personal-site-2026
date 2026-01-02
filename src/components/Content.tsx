import styled from "styled-components";
import ContentNavigation from "./ContentNavigation";
import { useState } from "react";
import {NavItems, type NavItemType } from "./ContentModels";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

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
      return <Skills />;
    case NavItems.PROJECTS:
      return <Projects />;
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
