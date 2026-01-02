import Card from "../CardComponent";

const Projects = () => {
  const Projects = [
    {
      title: "Personal Website 2026",
      description: "Developed a personal website using React and TypeScript.",
      link: { display: "[GitHub Repo]", url: "https://github.com/TealGlow/personal-site-2026" },
      skills: ["React", "TypeScript", "Styled Components"],
    },
  ];
  return (
    <div>
      {Projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          skills={project.skills}
        />
      ))}
    </div>
  );
};

export default Projects;
