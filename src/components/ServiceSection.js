import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CustomButton from './Button';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: var(--primary-green);
  color: var(--background);

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--background);
  color: var(--dark-green);
  padding: 2rem;
  border-radius: 10px;
  max-width: 300px;
  flex: 1;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ServiceSection = ({
  title,
  services,
  buttonText,
  buttonLink,
  itemVariants,
}) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <CardsContainer>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            variants={itemVariants}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </CardsContainer>
      {buttonText && buttonLink && (
        <Link to={buttonLink}>
          <CustomButton
            hoverColor="var(--dark-green)"
            backgroundColor="var(--dark-background)"
            textColor="var(--background)"
          >
            {buttonText}
          </CustomButton>
        </Link>
      )}
    </SectionContainer>
  );
};

export default ServiceSection;
