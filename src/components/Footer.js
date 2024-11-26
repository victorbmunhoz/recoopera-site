import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: var(--dark-background); /* Ajustado para seguir o Header */
  color: var(--background);
  text-align: center;
  margin-top: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 10rem;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    height: 50px;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage src={Logo} alt="Recoopera Logo" />

      <Copyright>
        &copy; 2024 Recoopera. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
