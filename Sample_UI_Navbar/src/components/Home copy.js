import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #000; /* Set background color to black */
  overflow-y: scroll; /* Enable vertical scrolling */
  height: 100vh; /* Set height to fill the viewport */
  padding: 10; /* Remove padding */
  margin: -10; /* Remove margin */
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: center; /* Center items horizontally */
`;

const ImageContainer = styled.div`
  margin-bottom: 20px; /* Add margin bottom to separate images */
  width: 100%; /* Make the container full-width */
`;

const Image = styled.img`
  width: 100%; /* Make the image fill its container */
  display: block;
`;

const Home_1 = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <Image src={require("../images/home.jpg")} alt="Image 1" />
      </ImageContainer>
      <ImageContainer>
        <Image src={require("../images/home2.jpg")} alt="Image 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src={require("../images/home3.jpg")} alt="Image 3" />
      </ImageContainer>
      <ImageContainer>
        <Image src={require("../images/home4.jpg")} alt="Image 4" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default Home_1;
