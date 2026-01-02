import styled from "styled-components";
import Card from "../CardComponent";

const Projects = () => {
  const Projects = [
    {
      title: "Personal Website 2026",
      description: "Developed a personal website on Vercel using React and TypeScript.",
      link: { display: "[GitHub Repo]", url: "https://github.com/TealGlow/personal-site-2026" },
      skills: ["React", "TypeScript", "Styled Components", "Vercel"],
    },
  ];
  return (
    <Container>
      {Projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          skills={project.skills}
        />
      ))}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
