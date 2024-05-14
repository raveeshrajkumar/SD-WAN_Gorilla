
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const ImageContainer = styled.div`
`;

const Investors = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={require("../images/investor1.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/investor2.jpg")}  alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <img src={require("../images/investor3.jpg")}  alt="Image 3" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/investor4.jpg")}  alt="Image 4" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/investor5.jpg")}  alt="Image 5" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default Investors;
