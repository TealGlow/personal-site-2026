import styled from "styled-components";

const Sidebar = () => {

  return (
    <SidebarContainer>
      <Name>Alyssa Comstock</Name>
      <Subtitle>Software Engineer</Subtitle>
      <Contact>
        <div>alyssacomstock95@gmail.com</div>
        <div>(503) 545-2088</div>
        <div>Beaverton, OR</div>
      </Contact>
      <Links>
        <LinkContainer
          href="https://github.com/TealGlow"
          target="_blank"
        >
          [github]
        </LinkContainer>
        <LinkContainer
          href="https://www.linkedin.com/in/alyssa-b-comstock/"
          target="_blank"
        >
          [linkedin]
        </LinkContainer>
          <LinkContainer href="../assets/Alyssa Comstock - 2025 resume.pdf" download>[download full resume]</LinkContainer>
      </Links>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  border-radius: 10px;
  margin: 0 25px;
  width: 275px;

  color: white;
  align-self: start;
`;

const Name = styled.h2`
  font-size: 52px;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Contact = styled.p`
  margin-bottom: 20px;
`;

const Links = styled.div``;

const LinkContainer = styled.a`
  margin-right: 10px;

  color: #50f9fbff;
  text-decoration: none;

  &:hover {
    color: #00ced1;
    cursor: pointer;
  }

  &:active {
    color: #008b8b;
  }
`;
