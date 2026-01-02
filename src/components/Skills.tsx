import React from 'react';
import styled from 'styled-components';

const Skills = () => {
    const languages = [
         "TypeScript", "React", "JavaScript", "Node.JS", "HTML", "CSS", 
        "RESTful API", "gRPC API", "C", "C++", "C#", "Python", "Express.JS", "jQuery", "SQL", ".NET", "ASP.NET", "Angular", "Axios" 
    ];

    const admin =[
        "MongoDB", "MySQL", "Relational Databases", "Bash Scripting", "NoSQL", "AWS", "PowerShell Scripting" 
    ]

    const tools = [
        "Vim", "Windows Visual Studio", "GitHub", "Git", "NPM", "Postman", "Insomnia", "PyCharm", 
"Hyper Terminal", "Linux", "Ubuntu Linux", "Linux Console", "Figma", "Miro", "Docker", "MySQL Server"
    ]
    return (
        <Container>
            <h2>Languages, Libraries, and Frameworks</h2>
          
                {languages.map((lang, index) => (
                    <Skill key={index}>{lang}</Skill>
                ))}
           
            <h2>Databases and Admin</h2>
          
                {admin.map((adm, index) => (
                    <Skill key={index}>{adm}</Skill>
                ))}
            
            <h2>Tools and Platforms</h2>
            
                {tools.map((tool, index) => (
                    <Skill key={index}>{tool}</Skill>
                ))}
            
        </Container>
    );
}

export default Skills;

const Container = styled.div`
    width: 70%;
`;

const Skill = styled.span`
    display: inline-block;
    background-color: #2b202aff;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
    font-size: 18px;
    font-weight: bold;

    user-select: none;
`;
