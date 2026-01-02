import Card from "../Card";

const Projects = () => {
  const Projects = [
    {
      title: "Project A",
      subtitle: "An awesome project",
      description: "Developed an awesome project using React and Node.js.",
      link: { display: "[GitHub Repo]", url: "https://www.google.com" },
      skills: ["React", "Node.js", "TypeScript"],
    },
  ];
  return (
    <div>
      {Projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          link={project.link}
          skills={project.skills}
        />
      ))}
    </div>
  );
};

export default Projects;
