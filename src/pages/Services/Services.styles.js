import styled from 'styled-components';

// Espaçamento padrão
const spacing = {
  small: '1rem',
  medium: '2rem',
  large: '4rem',
};

// Container principal da seção
export const ServiceContainer = styled.section`
  padding: ${spacing.large} ${spacing.medium};
  background-color: var(--background);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: ${spacing.large};
    color: var(--dark-green);
  }

  @media (min-width: 768px) {
    padding: ${spacing.large} ${spacing.large};
  }

  @media (min-width: 1024px) {
    padding: ${spacing.large} 10rem;
  }
`;

// Bloco de serviço
export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing.large};
  margin-bottom: ${spacing.large};

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    text-align: left;
  }
`;

// Conteúdo do serviço
export const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: ${spacing.medium};
    color: var(--dark-green);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: ${spacing.medium};
    color: var(--dark-background);
  }

  ul {
    list-style: none;
    padding-left: ${spacing.medium};
    margin-bottom: ${spacing.medium};

    li {
      font-size: 1rem;
      margin-bottom: ${spacing.small};
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    ul {
      padding-left: 0;
    }
  }
`;

// Ícone do serviço
export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: var(--primary-green);
  color: var(--background);
  border-radius: 50%;
  margin-bottom: ${spacing.medium};
  font-size: 2rem;
  align-self: center;
`;

// Imagem do serviço
export const ServiceImage = styled.img`
  flex: 1;
  max-width: 50%; /* Ajuste para limitar a largura da imagem */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%; /* Imagem ocupa a largura quase total em telas menores */
  }
`;
