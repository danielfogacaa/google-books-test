import React, { useEffect } from 'react';
import { useBooks } from 'hooks';
import { Header, Row, Input, Text, Button } from 'components';

export const Home = () => {
  const { getAll } = useBooks();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <Header>
        <Text fontSize='3rem' fontWeight='bold'>
          Biblioteca de livros
        </Text>
        <Text fontSize='1.5rem'>
          Encontre seus livros favoritos e descubra novas obras
        </Text>
        <Row>
          <Input width={300} height={50} />
          <Button>Ok</Button>
        </Row>
      </Header>
    </>
  );
};
