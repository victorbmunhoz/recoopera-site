import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection.js';
import ServiceSection from '../../components/ServiceSection.js';
import aboutImage from '../../assets/images/about.webp';
import parallaxImage from '../../assets/images/parallax-home.webp';
import ScrollToTop from '../../components/ScrollToTop.js';
import ContactSection from '../../components/ContactSection';
import HeroSection from '../../components/HeroSection';
import heroImage from '../../assets/images/banner-home.webp';
import {
  HomeContainer,
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
      <ScrollToTop />
      {/* Hero Section */}
      <HeroSection
        image={heroImage}
        title="Bem-vindo à Recoopera"
        paragraph="Transformamos resíduos em recursos valiosos, promovendo um futuro mais sustentável."
        buttonText="Conheça Mais"
        buttonLink="/sobre"
        overlayOpacity={0.6}
      />

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

      <ContactSection phone="+55 11 99999-9999" email="contato@recoopera.org" />
    </HomeContainer>
  );
};

export default Home;
