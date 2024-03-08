import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const StyledComponent = () => {
  return (
    <StyledButton>StyledComponent</StyledButton>
  );
};

export default StyledComponent;