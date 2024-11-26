import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Altura fixa para o parallax */
  overflow: hidden; /* Impede que o conteúdo saia do container */
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-green);
`;

const ParallaxImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%; /* Aumenta a altura para criar o efeito */
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateY(0); /* Posição inicial */
  z-index: 1;
  transition: transform 0.1s linear; /* Para um movimento mais suave */
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--light-green);
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: var(--primary-green);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--dark-green);
    }
  }
`;

const ParallaxSection = ({ image, text, buttonText, onButtonClick }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      if (!parallaxElement) return;

      const containerHeight = parallaxElement.parentElement.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const offsetTop = parallaxElement.parentElement.offsetTop;

      // Calcula a posição da imagem com base no scroll
      const distanceFromTop = scrollY - offsetTop;
      const speed = 0.4; // Ajuste para controlar a velocidade
      const translateValue = Math.min(
        distanceFromTop * speed,
        containerHeight * 0.5
      );

      parallaxElement.style.transform = `translateY(${translateValue}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ParallaxContainer>
      <ParallaxImage ref={parallaxRef} image={image} />
      {(text || buttonText) && (
        <ParallaxContent>
          {text && <h2>{text}</h2>}
          {buttonText && <button onClick={onButtonClick}>{buttonText}</button>}
        </ParallaxContent>
      )}
    </ParallaxContainer>
  );
};

export default ParallaxSection;
