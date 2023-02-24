import styled from "styled-components";
import background from "./assets/hero.jpeg";

const About = () => {
  return (
    <StyledContainer>
      <Container>
        <h2>Contact us</h2>
        <h4>Email: support@studioanahita.com</h4>
        <h4>Phone: +46737473225</h4>
      </Container>
    </StyledContainer>
  );
};

export default About;

const StyledContainer = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  h2,
  h4,
  p {
    text-align: center;
    font-weight: 400;
  }
  h2 {
    font-size: 34px;
    margin-bottom: 0.6em;
  }
  h4 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;
