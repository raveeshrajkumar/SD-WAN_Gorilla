
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const ImageContainer = styled.div`
`;

const FeatureTemplates = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={require("../images/sus1.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/sus2.jpg")}  alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <img src={require("../images/sus3.jpg")}  alt="Image 3" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/sus4.jpg")}  alt="Image 4" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/sus5.jpg")}  alt="Image 5" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/sus6.jpg")}  alt="Image 6" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/sus7.jpg")}  alt="Image 7" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default FeatureTemplates ;
