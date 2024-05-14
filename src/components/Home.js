import React, { useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../images/home.jpg';
import image2 from '../images/home2.jpg';
import image3 from '../images/home3.jpg';
import image4 from '../images/home4.jpg';

const HomeContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Home = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.bg-image');
    let currentImageIndex = 0;

    const showNextImage = () => {
      images[currentImageIndex].style.opacity = '0';
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.opacity = '1';
    };

    const interval = setInterval(showNextImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeContainer>
      <BackgroundImages>
        <BackgroundImage
          src={image1}
          alt="Background 1"
          className="bg-image"
          style={{ opacity: 1 }}
        />
        <BackgroundImage
          src={image2}
          alt="Background 2"
          className="bg-image"
        />
        <BackgroundImage
          src={image3}
          alt="Background 3"
          className="bg-image"
        />
        <BackgroundImage
          src={image4}
          alt="Background 4"
          className="bg-image"
        />

      </BackgroundImages>

    
    </HomeContainer>
  );
};


export default Home;
