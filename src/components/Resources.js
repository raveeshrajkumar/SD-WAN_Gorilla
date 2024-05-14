// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const ImageContainer = styled.div`
`;

const Innovation = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={require("../images/innovation1.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/innovation2.jpg")}  alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <img src={require("../images/innovation3.jpg")}  alt="Image 1" />
      </ImageContainer>

    </AboutContainer>
  );
};

export default Innovation;
