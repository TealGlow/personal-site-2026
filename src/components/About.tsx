import styled from "styled-components";

const About = () => {
    return <Container>Hi! I’m Alyssa Comstock, a Full Stack Software Engineer based in Beaverton, Oregon. 
        I’m currently in my third year at Trimble, where I design and build scalable, 
        user-focused software solutions. 
        My work often spans the full stack—from crafting intuitive front-end experiences to developing robust back-end systems. 
        Outside of coding, I’m passionate about knitting and crocheting. 
        I love exploring how the logic and structure behind these crafts mirror programming—both combining creativity with pattern, 
        precision, and problem-solving. The deep historical connection between textile work and computing inspires how I think about 
        technology and design every day.</Container>;
};

export default About;

const Container = styled.div`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-wrap;
  width: 70%;
`;
