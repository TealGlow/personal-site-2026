import React from "react";
import styled from "styled-components";
import Pill from "./Pill";

interface Props {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  link?: { display: string; url: string };
  skills?: string[];
}

const Card = ({ title, link, subtitle, date, description, skills }: Props) => (
  <Container>
    {date && <Time>{date}</Time>}
    <Body>
      {title && <Title>{title}</Title>}

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {description && <Description>{description}</Description>}
      {link && (
        <Link href={link.url} target="_blank">
          {link.display}
        </Link>
      )}
      {skills && (
        <div>
          {skills.map((skill, index) => (
            <Pill key={index} fontSize="14px" fontWeight="bold">
              {skill}
            </Pill>
          ))}
        </div>
      )}
    </Body>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Time = styled.time`
  padding: 20px 20px 20px 0;
  margin-top: 5px;
  font-size: 12px;
  min-width: 200px;
  text-wrap: nowrap;
  font-weight: bold;
`;

const Body = styled.div`
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

const Link = styled.a`
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
