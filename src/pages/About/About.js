import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Button';
import ParallaxSection from '../../components/ParallaxSection.js';
import ServiceSection from '../../components/ServiceSection.js';
import aboutSectionImage from '../../assets/images/about-section.webp';
import parallaxImage from '../../assets/images/parallax-home.webp';
import {
  AboutContainer,
  HeroSection,
  AboutSection,
  AboutText,
  AboutImage,
  ValuesSection,
  CardsWrapper,
  ValueCard,
} from './About.styles.js';
import { FaHandsHelping, FaEye, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection image={aboutSectionImage}>
        <h1>Bem-vindo à Recoopera</h1>
        <p>
          Transformamos resíduos em recursos valiosos, promovendo um futuro mais sustentável.
        </p>
        <Link to="/servicos">
          <CustomButton
            backgroundColor="var(--primary-green)"
            textColor="var(--background)"
            hoverColor="var(--dark-green)"
          >
            Conheça Mais
          </CustomButton>
        </Link>
      </HeroSection>

      {/* Nova Seção */}
      <AboutSection>
        <AboutText
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2>Nossa História</h2>
          <p>
            Desde a nossa fundação, nos comprometemos com soluções inovadoras
            para criar um impacto positivo no meio ambiente e nas comunidades onde atuamos.
          </p>
        </AboutText>
        <AboutImage
          src={aboutSectionImage}
          alt="Equipe Recoopera"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </AboutSection>

      {/* Parallax Section */}
      <ParallaxSection image={parallaxImage} text="Juntos por um futuro sustentável." />

      {/* Missão, Visão e Valores */}
      <ValuesSection>
        <h2>Missão, Visão e Valores</h2>
        <CardsWrapper>
          <ValueCard>
            <FaHandsHelping />
            <h3>Missão</h3>
            <p>
              Transformar resíduos em oportunidades sustentáveis, criando impacto positivo no ambiente.
            </p>
          </ValueCard>
          <ValueCard>
            <FaEye />
            <h3>Visão</h3>
            <p>
              Ser referência global em inovação e gestão sustentável de resíduos.
            </p>
          </ValueCard>
          <ValueCard>
            <FaLeaf />
            <h3>Valores</h3>
            <p>
              Sustentabilidade, inovação e respeito ao meio ambiente guiam nossa missão.
            </p>
          </ValueCard>
        </CardsWrapper>
      </ValuesSection>

      {/* Services Section */}
      <ServiceSection
        title="Nossos Serviços"
        services={[
          {
            title: 'Gestão de Resíduos Recorrente',
            description: 'Coleta eficiente e regular para o seu negócio.',
          },
          {
            title: 'Gestão de Resíduos para Eventos',
            description: 'Planejamento e execução sustentável para eventos.',
          },
        ]}
        buttonText="Conheça Mais"
        buttonLink="/servicos"
      />
    </AboutContainer>
  );
};

export default About;
