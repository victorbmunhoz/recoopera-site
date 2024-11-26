import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones de menu do react-icons
import Button from '../components/Button'; // Botão reutilizável
import Logo from '../assets/images/logo.svg';

// Styled Components
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--dark-background);
  color: var(--background);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1.5rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 10rem;
  }
`;

const Spacer = styled.div`
  height: 80px; /* Altura do Header para evitar sobreposição */
`;

const LogoImage = styled.img`
  height: 40px;

  @media (min-width: 768px) {
    height: 50px;
  }
`;

const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  svg {
    color: var(--background);
    font-size: 2rem;
  }
`;

const MobileMenuOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(19, 53, 43, 0.98); /* Fundo com opacidade ajustada */
  z-index: 900;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  transition: all 0.3s ease;
`;

const NavLinksDesktop = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;

    li {
      a {
        text-decoration: none;
        color: var(--background);
        font-size: 1rem;
        font-weight: 600;
        transition: color 0.3s ease;

        &:hover {
          color: var(--light-green);
        }
      }
    }
  }
`;

const NavLinksMobile = styled.ul`
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  li {
    a {
      text-decoration: none;
      color: var(--background);
      font-size: 1.5rem;
      font-weight: 600;
      transition: color 0.3s ease;

      &:hover {
        color: var(--light-green);
      }
    }
  }
`;

const ContactButtonWrapper = styled.div`
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

// Componente Header
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <Link to="/">
          <LogoImage src={Logo} alt="Recoopera Logo" />
        </Link>
        <MobileMenuIcon onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuIcon>
        <NavLinksDesktop>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <ContactButtonWrapper>
              <Button
                backgroundColor="var(--primary-green)" /* Cor primária */
                textColor="var(--background)"
                hoverColor="var(--dark-green)"
              >
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </ContactButtonWrapper>
          </li>
        </NavLinksDesktop>
      </Navbar>

      {/* Espaço para evitar sobreposição */}
      <Spacer />

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay isOpen={menuOpen}>
        <NavLinksMobile>
          <li>
            <Link to="/sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/servicos" onClick={() => setMenuOpen(false)}>
              Serviços
            </Link>
          </li>
          <li>
            <ContactButtonWrapper>
              <Button
                backgroundColor="var(--primary-green)" /* Cor primária */
                textColor="var(--background)"
                hoverColor="var(--dark-green)"
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </ContactButtonWrapper>
          </li>
        </NavLinksMobile>
      </MobileMenuOverlay>
    </>
  );
};

export default Header;
