import React, { useCallback, useEffect, useState } from 'react';
import { useBooks } from 'hooks';
import { Loading, Header, Row, Input, Text, Button } from 'components';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { listInfo, bookList, getAll, isLoading } = useBooks();
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (!searchText) {
        toast.error(
          `Você deve digitar algo para que possamos encontrar seu livro!`
        );
        return;
      }
      setSearchText('');
      getAll(searchText, true);
    },
    [getAll, searchText]
  );

  return (
    <>
      {isLoading && <Loading />}
      <Header>
        <Text fontSize='3rem' fontWeight='bold'>
          Biblioteca de livros
        </Text>
        <Text fontSize='1.5rem'>
          Encontre seus livros favoritos e descubra novos
        </Text>
        <Row>
          <form>
            <Input
              width={300}
              height={50}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder='Nos ajude a encontrar seu livro...'
            />
            <Button onClick={(e) => handleSearch(e)} type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>
        </Row>
      </Header>
      {listInfo?.totalItems}
      {bookList?.map((item) => {
        return <div key={item.id}>{item.volumeInfo.title}</div>;
      })}
    </>
  );
};
