import styled from "styled-components";

const About = () => {
  return (
    <Container>
      Hi! I’m Alyssa Comstock, a Full Stack Software Engineer based in
      Beaverton, Oregon. I’m currently in my third year at Trimble, where I work on both the front end and back end.


      <br/>
      <br/>
      Outside of work I'm fiber arts like crochet, knitting, and sewing. I also enjoy gaming (videogames and ttrpgs) in my free time.
    </Container>
  );
};

export default About;

const Container = styled.div`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-wrap;
`;
