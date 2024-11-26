import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about.webp';
import {
  HomeContainer,
  HeroSection,
  AboutSection,
  AboutContent,
  AboutImage,
  ParallaxSection,
  ServicesSection,
  CardsContainer,
  ServiceCard,
  CustomButton,
} from './Home.styles.js'; // Ajuste o caminho para o arquivo de estilos

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
      <ParallaxSection>
        <h2>Juntos por um Futuro Sustentável</h2>
      </ParallaxSection>

      {/* Services Section */}
      <ServicesSection>
        <h2>Nossos Serviços</h2>
        <CardsContainer>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            variants={itemVariants}
          >
            <h3>Gestão de Resíduos Recorrente</h3>
            <p>Coleta eficiente e regular para o seu negócio.</p>
          </ServiceCard>
          <ServiceCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
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
