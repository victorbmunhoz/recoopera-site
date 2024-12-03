import styled from 'styled-components';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

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
