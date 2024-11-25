import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import heroImage from '../assets/images/banner-home.webp';
import aboutImage from '../assets/images/about.webp';

// Variáveis de espaçamento para padronização
const spacing = {
  small: '1rem',
  medium: '2rem',
  large: '4rem',
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.large};
  background-color: var(--background);
`;

const HeroSection = styled.section`
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

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.medium};
  padding: ${spacing.large} ${spacing.medium};
  background: var(--background);
  color: var(--dark-green);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutContent = styled(motion.div)`
  flex: 1;
  text-align: center;

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
`;

const AboutImage = styled(motion.img)`
  flex: 1;
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ServicesSection = styled.section`
  padding: ${spacing.large} ${spacing.medium};
  text-align: center;
  background: var(--primary-green);
  color: var(--background);

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: ${spacing.medium};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const CardsContainer = styled.div`
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

const ServiceCard = styled(motion.div)`
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

const CustomButton = styled(Button)`
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Transformando Resíduos em Recursos Valiosos</h1>
        <p>Contribuímos para um futuro sustentável com soluções inovadoras.</p>
        <Link to="/contato">
          <CustomButton>Fale Conosco</CustomButton>
        </Link>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <AboutContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={itemVariants}
        >
          <h2>Sobre a Recoopera</h2>
          <p>
            Somos uma empresa comprometida com a sustentabilidade, oferecendo
            soluções inteligentes para a gestão de resíduos. Nosso objetivo é
            transformar resíduos em recursos valiosos.
          </p>
          <Link to="/sobre">
            <CustomButton>Saiba Mais</CustomButton>
          </Link>
        </AboutContent>

        <AboutImage
          src={aboutImage}
          alt="Sobre a Recoopera"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={itemVariants}
        />
      </AboutSection>

      {/* Services Section */}
      <ServicesSection>
        <h2>Nossos Serviços</h2>
        <CardsContainer>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={itemVariants}
          >
            <h3>Gestão de Resíduos Recorrente</h3>
            <p>Coleta eficiente e regular para o seu negócio.</p>
          </ServiceCard>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={itemVariants}
          >
            <h3>Gestão de Resíduos para Eventos</h3>
            <p>Planejamento e execução sustentável para eventos.</p>
          </ServiceCard>
        </CardsContainer>
        <Link to="/servicos">
          <CustomButton
            hoverColor="var(--dark-green)"
            backgroundColor="var(--dark-background)"
            textColor="var(--background)"
          >
            Conheça Mais
          </CustomButton>
        </Link>
      </ServicesSection>
    </HomeContainer>
  );
};

export default Home;
