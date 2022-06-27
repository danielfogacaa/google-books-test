import { Backdrop, Button } from '@/components';
import { Container } from './Container/container';
import { ThemeType } from '@/themes';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from 'components';
import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Modal: React.FC = () => {
  const theme = useTheme() as ThemeType;
  const navigate = useNavigate();
  return (
    <Backdrop>
      <Container>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          size='3x'
          color={theme.colors.error}
        />
        <Text fontSize='2rem' fontWeight='bold' color={theme.colors.secondary}>
          Erro ao trazer informações do livro!
        </Text>
        <Button fontSize='1.2rem' onClick={() => navigate('/book-list')}>
          Voltar para a pesquisa
        </Button>
      </Container>
    </Backdrop>
  );
};
