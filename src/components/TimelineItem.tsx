
import React from "react";
import styled from "styled-components";

interface Props{
    title: string;
    subtitle?: string;
    date: string;
    description: string;
    skills?: string[];
}



const TimelineItem = ({ title,  subtitle, date, description, skills }: Props) => (
        <Card>
            <Time>{date}</Time>
            <Container>
                <Title>{title}</Title>

                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                <Description >{description}</Description>
                {skills && <div>
                        {skills.map((skill, index) => (
                            <Skill key={index}>{skill}</Skill>
                        ))}
             
                </div>}
            </Container>
        </Card>
);


export default TimelineItem;


const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Time = styled.time`
    padding: 20px 20px 20px 0;
    margin-top:5px;
    font-size: 12px;
    min-width: 200px;
    text-wrap: nowrap;
    font-weight:bold;
`;

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

const Description = styled.p`
    text-wrap: wrap;
    font-size: 14px;
`;

const Subtitle = styled.p`
    margin-top: 0px;
    font-size: 14px;
`;

const Skill = styled.span`
    display: inline-block;
    background-color: #d6bcd5ff;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
    font-size: 12px;
    font-weight: bold;

    user-select: none;
`;