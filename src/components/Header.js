import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones de menu do react-icons
import Logo from '../assets/images/logo.svg';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: var(--dark-background);
  color: var(--background);

  @media (min-width: 768px) {
    padding: 2rem 10rem;
  }
`;

const LogoImage = styled.img`
  height: 40px;

  @media (min-width: 768px) {
    height: 50px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: var(--dark-background);
  text-align: center;
  z-index: 10;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    gap: 2rem;
    justify-content: flex-end;
    width: auto;
    background: none;
    text-align: left;
  }

  li {
    margin: 1rem 0;

    @media (min-width: 768px) {
      margin: 0;
    }

    a {
      text-decoration: none;
      color: var(--background);
      font-weight: 600;

      &:hover {
        color: var(--light-green);
      }
    }
  }
`;

const MobileMenu = styled.div`
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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <Link to="/">
        <LogoImage src={Logo} alt="recoopera Logo" />
      </Link>
      <MobileMenu onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MobileMenu>
      <NavLinks isOpen={menuOpen}>
        {/* <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li> */}
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
          <Link to="/contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
        </li>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
