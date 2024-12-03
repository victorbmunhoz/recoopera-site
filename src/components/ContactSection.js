import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import do Framer Motion
import { FiPhone, FiMail } from 'react-icons/fi';

// Estilização da seção principal
const Section = styled.section`
  background-color: var(--background);
  padding: 2rem 1rem;
  text-align: center;
`;

// Título da seção
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--dark-green);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Contêiner para os cards
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// Estilização de cada card
const ContactCard = styled(motion.div)` // Usando motion.div para animação
  background: var(--dark-background);
  color: var(--background);
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  svg {
    font-size: 2rem;
    color: var(--light-green);
  }

  a {
    text-decoration: none;
    color: var(--background);
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--light-green);
    }
  }
`;

// Variantes do Framer Motion para animações
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Inicialmente invisível e deslocado para baixo
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Aparece suavemente
};

const ContactSection = ({ phone, email }) => {
  return (
    <Section>
      <Title>Entre em contato</Title>
      <CardsWrapper>
        {/* Card de Telefone */}
        <ContactCard
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FiPhone />
          <a href={`tel:${phone}`}>{phone}</a>
        </ContactCard>

        {/* Card de E-mail */}
        <ContactCard
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FiMail />
          <a href={`mailto:${email}`}>{email}</a>
        </ContactCard>
      </CardsWrapper>
    </Section>
  );
};

export default ContactSection;
