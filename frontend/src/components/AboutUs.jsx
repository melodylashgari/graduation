import styled from "styled-components";
import background from "./assets/hero.jpeg";

const About = () => {
  return (
    <StyledContainer>
    <Container>
      <h2>About us</h2>
      <h4>We are Studio Anahita</h4>
    <ImageContainer/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi unde harum, quos dolorum animi optio aliquam similique nulla nemo quibusdam debitis repudiandae. Officia, architecto! Eos adipisci perspiciatis fugiat eius maxime.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi unde harum, quos dolorum animi optio aliquam similique nulla nemo quibusdam debitis repudiandae.</p>
    </Container>
    </StyledContainer>
  );
};

export default About;


const StyledContainer = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  h2, h4, p{
    text-align: center;
    font-weight: 400;
    }
    h2{
        font-size: 34px;
    }
    h4{
        font-size: 28px;
        margin: 0.5em 0 1.3em 0;
    }
    p{
        margin-top: 10px;
    }
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  padding: 2rem;
`

const ImageContainer = styled.div`
background-image: url(${background});
height: 500px;
background-repeat: no-repeat;
background-size: 100%;
border-radius: 20px;
`