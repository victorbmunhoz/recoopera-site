import React from 'react';
import ParallaxSection from '../../components/ParallaxSection.js';
import ServiceSection from '../../components/ServiceSection.js';
import aboutSectionImage from '../../assets/images/about-section.webp';
import parallaxImage from '../../assets/images/parallax-home.webp';
import ScrollToTop from '../../components/ScrollToTop.js';
import HeroSection from '../../components/HeroSection';
import ContactSection from '../../components/ContactSection';
import {
  AboutContainer,
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
       <ScrollToTop />
      {/* Hero Section */}
      <HeroSection
        image={aboutSectionImage}
        title="Bem-vindo à Recoopera"
        paragraph="Transformamos resíduos em recursos valiosos, promovendo um futuro mais sustentável."
        buttonText="Conheça Mais"
        buttonLink="/serviços"
        overlayOpacity={0.6}
      />

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

      <ContactSection phone="+55 11 99999-9999" email="contato@recoopera.org" />
    </AboutContainer>
  );
};

export default About;
