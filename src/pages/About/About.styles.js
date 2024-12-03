import styled from 'styled-components';
import { motion } from 'framer-motion';

// Variáveis de espaçamento para padronização
const spacing = {
  small: '1rem',
  medium: '2rem',
  large: '4rem',
  extraLarge: '6rem',
};

// Contêiner principal da página
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);
`;

// Hero Section com imagem de fundo
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${spacing.large} ${spacing.medium};
  min-height: 100vh;
  background: url(${(props) => props.image}) no-repeat center center/cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Opacidade da imagem */
    z-index: 1;
  }

  h1,
  p,
  a {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3rem;
    color: var(--light-green);
    margin-bottom: ${spacing.medium};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--background);
    margin-bottom: ${spacing.medium};
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Seção "Nossa História"
export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.large};
  padding: ${spacing.large};
  background: var(--background);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutText = styled(motion.div)`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    color: var(--dark-green);
    margin-bottom: ${spacing.medium};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const AboutImage = styled(motion.img)`
  flex: 1;
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Missão, Visão e Valores
export const ValuesSection = styled.section`
  background: var(--light-background);
  padding: ${spacing.extraLarge} ${spacing.medium};
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--dark-green);
    margin-bottom: ${spacing.large};
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.large};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.medium};
  }
`;

export const ValueCard = styled(motion.div)`
  background: var(--dark-background);
  padding: ${spacing.medium};
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color: var(--background);
  width: 300px; /* Largura fixa para os cards */
  height: 300px; /* Altura fixa para uniformidade */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 3rem;
    color: var(--light-green);
    margin-bottom: ${spacing.small};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: ${spacing.small};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
