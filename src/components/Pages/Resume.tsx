import styled from "styled-components";
import Card from "../CardComponent";

const Resume = () => {
  const resumeItems = [
    {
      title: "Software Engineer",
      subtitle: "Trimble",
      startDate: "January 2023",
      endDate: "Present",
      description:
        "Developed and maintained user interfaces using React.js and Typescript. Designed and Implemented API Endpoints for a gRPC-style API architecture using C#.",
      skills: [
        "React.js",
        "Typescript",
        "CSS",
        "Styled Components",
        "C#",
        ".NET Core",
        "gRPC",
        "SQL Server",
        "MongoDB",
        "MySQL",
        "Python",
        "Microservices",
        "Restful APIs",
        "PowerShell Scripting",
        "Code Review",
        "Unit Testing",
        "Agile Methodologies",
        "Detailed Design Documentation",
      ],
    },
    {
      title: "Software Engineer Intenship",
      subtitle: "Trimble",
      startDate: "June 2022",
      endDate: "September 2022",
      description:
        "Worked on both front-end and back-end features in Angular, Typescript, and C# ",
      skills: ["Angular", "Typescript", "C#"],
    },
    {
      title: "Oregon State University",
      startDate: "August 2020",
      endDate: "December 2022",
      description: "Bachelor of Science in Computer Science.",
      subtitle: "3.76 GPA",
      skills: [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Databases",
        "Software Engineering",
        "Computer Networks",
        "Web Development",
        "C",
        "Python",
        "Bash",
        "Linux",
        "Ubuntu",
        "Restful API",
        "MySQL",
        "Git",
        "GitHub",
        "Node.JS"
      ],
    },
    {
      title: "Portland State University",
      startDate: "September 2013",
      endDate: "August 2019",
      description: "Bachelor of Science in Mathematics.",
      skills: ["Statistics"],
    },
  ];

  return (
    <Container>
      {resumeItems.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={`${item.startDate} - ${item.endDate}`}
          description={item.description}
          skills={item.skills}
        />
      ))}
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80vh;

  overflow-y: auto;
  overflow-x: hidden;
`;
