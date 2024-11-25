import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.backgroundColor || 'var(--primary-green)'};
  color: ${(props) => props.textColor || 'var(--background)'};
  width: ${(props) => props.width || 'auto'};
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || 'var(--dark-green)'};
  }
`;

const Button = ({
  backgroundColor,
  textColor,
  hoverColor,
  width,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      hoverColor={hoverColor}
      width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
