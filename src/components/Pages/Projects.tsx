import styled from "styled-components";
import Card from "../CardComponent";

const Projects = () => {
  const Projects = [
    {
      title: "Blog Api",
      description: "Blog api with authentication and authorization so that users can login, create blog posts, delete blog posts, view blog posts, and edit blog posts.  Created so that I can practice standing up a Web API in C#. Also, another way for me to practice Dockerizing.",
      link:{display: "[GitHub Repo]", url:"https://github.com/TealGlow/blog-api"},
      skills:["C#", ".Net", "MongoDb", "Restful API", "Database CRUD operations", "Authentication", "Authorization", "Json Web Tokens", "Bearer Tokens", "Postman", "Insomnia", "Web API", "Docker", "Docker Desktop"]
    },
    {
        title: "Stitch Tracker",
        description: "Stitch tracker application for fiberartists allowing users to track, time, row count, and notes for thier projects. Developed using React and Electron.",
        link: {display:"[GitHub Repo]", url: "https://github.com/TealGlow/Stitch-Tracker" },
        skills: ["React", "TypeScript", "Electron.JS", "Styled Components"]
    },
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
    width: 70%;
`;
