import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <h1>Bem-vindo à recoopera SERVIÇOS</h1>
      <p>Trabalhando por um mundo mais sustentável.</p>
    </Container>
  );
};

export default Home;
