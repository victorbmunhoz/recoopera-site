import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection.js';
import ServiceSection from '../../components/ServiceSection.js';
import aboutImage from '../../assets/images/about.webp';
import parallaxImage from '../../assets/images/parallax-home.webp';
import {
  HomeContainer,
  HeroSection,
  AboutSection,
  AboutContent,
  AboutImage,
  CustomButton
} from './Home.styles.js';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const services = [
    {
      title: 'Gestão de Resíduos Recorrente',
      description: 'Coleta eficiente e regular para o seu negócio.',
    },
    {
      title: 'Gestão de Resíduos para Eventos',
      description: 'Planejamento e execução sustentável para eventos.',
    },
  ];

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
          transition={{ duration: 1.5 }}
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
          transition={{ duration: 1.5 }}
          variants={itemVariants}
        />
      </AboutSection>

      {/* Parallax Section */}
      <ParallaxSection
        image={parallaxImage}
        text="Juntos por um futuro sustentável."
      />

      {/* Services Section */}
      <ServiceSection
        title="Nossos Serviços"
        services={services}
        buttonText="Conheça Mais"
        buttonLink="/servicos"
        itemVariants={itemVariants}
      />
    </HomeContainer>
  );
};

export default Home;
