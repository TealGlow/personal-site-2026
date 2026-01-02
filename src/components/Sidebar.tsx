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
        <Link
          onClick={() => window.open("https://github.com/TealGlow", "_blank")}
        >
          [github]
        </Link>
        <Link
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/alyssa-b-comstock/",
              "_blank",
            )
          }
        >
          [linkedin]
        </Link>
      </Links>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  border-radius: 10px;
  margin: 0 25px;

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

const Link = styled.span`
  margin-right: 10px;

  color: #50f9fbff;

  &:hover {
    color: #00ced1;
    cursor: pointer;
  }

  &:active {
    color: #008b8b;
  }
`;
