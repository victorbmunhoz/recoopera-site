import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
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
`;

const LogoImage = styled.img`
  height: 40px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    height: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column; /* Links em vertical para tablets */
    align-items: center;
  }

  @media (min-width: 1025px) {
    flex-direction: row; /* Links em horizontal para telas maiores */
    gap: 1.5rem;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: var(--background);
    font-weight: 600;
    font-size: 0.875rem;

    &:hover {
      color: var(--light-green);
    }

    @media (min-width: 1025px) {
      font-size: 1rem;
    }
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
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </NavLinks>
      <Copyright>&copy; 2024 Recoopera. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
