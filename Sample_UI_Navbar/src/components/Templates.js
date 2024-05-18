
import React from 'react';
import styled from 'styled-components';

const CSSContainer = styled.div`
  display: flex;
  justify-content: center; // Center horizontally
  align-items: flex-start; // Align at the top
  height: 100vh; // Full viewport height to ensure it centers correctly
  padding-top: 20px; // Adjust padding as needed
`;

const Templates = () => {
  return (
    <CSSContainer>
      <h1>Templates Page</h1>
    </CSSContainer>
  );
};

export default Templates ;
