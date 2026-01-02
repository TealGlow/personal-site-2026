import React from 'react';
import styled from 'styled-components';
import Pill from '../Pill';

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
                    <Pill backgroundColor="#2b202aff" fontColor='white' fontSize='18px'  key={index}>{lang}</Pill>
                ))}
           
            <h2>Databases and Admin</h2>
          
                {admin.map((adm, index) => (
                    <Pill backgroundColor="#2b202aff" fontColor='white' fontSize='18px'  key={index}>{adm}</Pill>
                ))}
            
            <h2>Tools and Platforms</h2>
            
                {tools.map((tool, index) => (
                    <Pill backgroundColor="#2b202aff" fontColor='white' fontSize='18px'  key={index}>{tool}</Pill>
                ))}
            
        </Container>
    );
}

export default Skills;

const Container = styled.div`
    width: 70%;
`;
