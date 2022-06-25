import React, { useEffect, useState } from 'react';
import { useBooks } from 'hooks';
import { Header, Row, Input, Text, Button } from 'components';

export const Home = () => {
  const { listInfo, bookList, getAll } = useBooks();
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    getAll(searchText);
  };

  return (
    <>
      <Header>
        <Text fontSize='3rem' fontWeight='bold'>
          Biblioteca de livros
        </Text>
        <Text fontSize='1.5rem'>
          Encontre seus livros favoritos e descubra novos mundos
        </Text>
        <Row>
          <Input
            width={300}
            height={50}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Pesquisar...'
          />
          <Button onClick={handleSearch}>Ok</Button>
        </Row>
      </Header>
      {listInfo?.totalItems}
      {bookList?.map((item) => {
        return <div key={item.id}>{item.volumeInfo.title}</div>;
      })}
    </>
  );
};
