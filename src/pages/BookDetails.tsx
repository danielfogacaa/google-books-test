import React, { useCallback, useEffect, useState } from 'react';
import { useBooks } from 'hooks';
import {
  Loading,
  Header,
  List,
  Row,
  Input,
  Text,
  Button,
  Card,
  Container
} from 'components';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeType } from '@/themes';
import { useTheme } from 'styled-components';

export const BookDetails = () => {
  const theme = useTheme() as ThemeType;
  const { listInfo, bookList, getAll, isLoading, startIndex } = useBooks();
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = useCallback(
    (
      e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      loadMore?: boolean
    ) => {
      e && e.preventDefault();
      if (!searchText) {
        toast.error(
          `Você deve digitar algo para que possamos encontrar seu livro!`
        );
        return;
      }
      getAll(searchText, loadMore);
    },
    [getAll, searchText]
  );

  return (
    <>
      Book Details
      {isLoading && <Loading />}
      <Header padding='2rem'>
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
            <Button width={40} onClick={(e) => handleSearch(e)} type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>
        </Row>
      </Header>
      {bookList.length > 0 && (
        <Container>
          <Text fontSize='1.5rem' color={theme.colors.secondary}>
            {`Livros encontrados: ${listInfo?.totalItems}`}
          </Text>
          <List>
            {bookList?.map((item) => {
              return <Card key={item.id} bookInfo={item} />;
            })}
          </List>
          {startIndex < listInfo?.totalItems && (
            <Button
              maxWidth={200}
              bg={theme.colors.secondary}
              fontSize='1.2rem'
              onClick={(e) => handleSearch(e, true)}
            >
              Carregar mais livros...
            </Button>
          )}
        </Container>
      )}
    </>
  );
};
