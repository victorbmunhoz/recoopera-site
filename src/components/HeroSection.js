import React from 'react';
import styled from 'styled-components';

const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${(props) => props.padding || '4rem 2rem'};
  min-height: ${(props) => props.height || '100vh'};
  background: url(${(props) => props.image}) no-repeat center center/cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${(props) => props.overlayOpacity || 0.5});
    z-index: 1;
  }

  h1,
  p,
  a {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: ${(props) => props.titleSize || '3rem'};
    color: var(--light-green);
    margin-bottom: 1rem;
  }

  p {
    font-size: ${(props) => props.textSize || '1.2rem'};
    line-height: 1.8;
    color: var(--background);
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${(props) => props.titleSizeMobile || '2.5rem'};
    }

    p {
      font-size: ${(props) => props.textSizeMobile || '1rem'};
    }
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--background);
  background-color: var(--primary-green);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--dark-green);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const HeroSection = ({
  image,
  title,
  paragraph,
  buttonText,
  buttonLink,
  overlayOpacity = 0.5,
  height = '100vh',
  padding = '4rem 2rem',
  titleSize,
  titleSizeMobile,
  textSize,
  textSizeMobile,
}) => {
  return (
    <HeroSectionWrapper
      image={image}
      overlayOpacity={overlayOpacity}
      height={height}
      padding={padding}
      titleSize={titleSize}
      titleSizeMobile={titleSizeMobile}
      textSize={textSize}
      textSizeMobile={textSizeMobile}
    >
      <h1>{title}</h1>
      {paragraph && <p>{paragraph}</p>}
      {buttonText && buttonLink && (
        <a href={buttonLink}>
          <Button>{buttonText}</Button>
        </a>
      )}
    </HeroSectionWrapper>
  );
};

export default HeroSection;
