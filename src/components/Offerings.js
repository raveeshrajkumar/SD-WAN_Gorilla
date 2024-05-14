
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const ImageContainer = styled.div`
`;

const OurOfferings = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <img src={require("../images/offerings1.jpg")}  alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/offerings2.jpg")}  alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <img src={require("../images/offerings3.jpg")}  alt="Image 3" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/offerings4.png")}  alt="Image 4" />
      </ImageContainer>
      <ImageContainer>
      <img src={require("../images/offerings5.jpg")}  alt="Image 5" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default OurOfferings ;
