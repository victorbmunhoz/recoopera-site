import React from 'react';
import HeroSection from '../../components/HeroSection';
import ParallaxSection from '../../components/ParallaxSection';
import ContactSection from '../../components/ContactSection';
import ScrollToTop from '../../components/ScrollToTop';
import {
  ServiceContainer,
  ServiceItem,
  ServiceContent,
  ServiceImage,
  ServiceIcon,
} from './Services.styles';
import { FiTrash2, FiCalendar } from 'react-icons/fi';

// Importação de imagens
import heroImage from '../../assets/images/services-hero.webp';
import parallaxImage from '../../assets/images/parallax-home.webp';
import recurringServiceImage from '../../assets/images/recurring-service.webp';
import eventServiceImage from '../../assets/images/event-service.webp';

const Services = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection
        image={heroImage}
        title="Nossos Serviços"
        paragraph="Soluções completas para gestão de resíduos, atendendo empresas e eventos com eficiência e sustentabilidade."
      />
      <ServiceContainer>
        <h2>Detalhes dos Serviços</h2>

        {/* Serviço 1 */}
        <ServiceItem>
          <ServiceContent>
            <ServiceIcon>
              <FiTrash2 />
            </ServiceIcon>
            <h3>Gestão de Resíduos Recorrente</h3>
            <p>
              Atendemos empresas com demandas regulares de coleta e destinação
              de resíduos. Oferecemos serviços personalizados, garantindo:
            </p>
            <ul>
              <li>• Relatórios detalhados de coleta.</li>
              <li>• Conformidade ambiental completa.</li>
              <li>• Planejamento de rotas eficiente.</li>
            </ul>
            <p>
              Ideal para indústrias, escritórios e estabelecimentos comerciais
              que buscam uma solução sustentável e confiável.
            </p>
          </ServiceContent>
          <ServiceImage src={recurringServiceImage} alt="Gestão de Resíduos Recorrente" />
        </ServiceItem>

        {/* Serviço 2 */}
        <ServiceItem reverse>
          <ServiceContent>
            <ServiceIcon>
              <FiCalendar />
            </ServiceIcon>
            <h3>Gestão de Resíduos para Eventos</h3>
            <p>
              Planejamos e executamos a gestão de resíduos para eventos de
              pequeno, médio e grande porte. Nossos diferenciais incluem:
            </p>
            <ul>
              <li>• Coleta seletiva durante o evento.</li>
              <li>• Relatórios pós-evento com métricas sustentáveis.</li>
              <li>• Redução de impacto ambiental.</li>
            </ul>
            <p>
              Seja um evento corporativo ou cultural, garantimos uma gestão
              eficiente e responsável.
            </p>
          </ServiceContent>
          <ServiceImage src={eventServiceImage} alt="Gestão de Resíduos para Eventos" />
        </ServiceItem>
      </ServiceContainer>
      <ParallaxSection
        image={parallaxImage}
        text="Soluções Sustentáveis para um Mundo Melhor"
      />
      <ContactSection
        email="contato@recoopera.org"
        phone="+55 11 98765-4321"
      />
    </>
  );
};

export default Services;
