
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const ImageContainer = styled.div`
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={require("../images/about_us1.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/about_us2.jpg")}  alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <img src={require("../images/about_us3.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/about_us4.jpg")}  alt="Image 2" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutUs;
