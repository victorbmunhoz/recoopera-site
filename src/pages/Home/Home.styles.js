import styled from 'styled-components';
import Button from '../../components/Button';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/banner-home.webp';

// Variáveis de espaçamento para padronização
const spacing = {
  small: '1rem',
  medium: '2rem',
  large: '4rem',
};

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

export const HeroSection = styled.section`
  background: url(${heroImage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: var(--background);
  position: relative;
  padding: ${spacing.medium};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(19, 53, 43, 0.7);
    z-index: 1;
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--light-green);
    margin-bottom: ${spacing.medium};

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    position: relative;
    z-index: 2;
    font-size: 1.25rem;
    margin-bottom: ${spacing.medium};
    color: var(--background);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    position: relative;
    z-index: 2;
  }
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.large} ${spacing.medium};
  background: var(--background);
  color: var(--dark-green);
  gap: ${spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutContent = styled(motion.div)`
  flex: 1;
  text-align: center;
  max-width: 45%;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: ${spacing.medium};
    color: var(--dark-green);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: ${spacing.medium};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    display: inline-block;
    margin-top: ${spacing.small};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AboutImage = styled(motion.img)`
  flex: 1;
  max-width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const ServicesSection = styled.section`
  padding: ${spacing.large} ${spacing.medium};
  text-align: center;
  background: var(--primary-green);
  color: var(--background);
  margin: 0; /* Remove margem superior */

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: ${spacing.medium};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${spacing.medium};
  margin-bottom: ${spacing.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceCard = styled(motion.div)`
  background: var(--background);
  color: var(--dark-green);
  padding: ${spacing.medium};
  border-radius: 10px;
  max-width: 300px;
  flex: 1;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: ${spacing.small};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const CustomButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  padding: ${spacing.small} ${spacing.medium};
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: var(--light-green);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
