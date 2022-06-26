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
import { useParams } from 'react-router-dom';

type RouteParams = {
  bookId: string;
};

export const BookDetails = () => {
  const theme = useTheme() as ThemeType;
  const { bookId } = useParams<RouteParams>();
  const { bookDetails, getBook, isLoading } = useBooks();
  const [searchText, setSearchText] = useState<string>('');

  // const handleSearch = useCallback(
  //   (
  //     e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //     loadMore?: boolean
  //   ) => {
  //     e && e.preventDefault();
  //     if (!searchText) {
  //       toast.error(
  //         `Você deve digitar algo para que possamos encontrar seu livro!`
  //       );
  //       return;
  //     }
  //     getAll(searchText, loadMore);
  //   },
  //   [getAll, searchText]
  // );

  useEffect(() => {
    if (bookId) getBook(bookId);
  }, [bookId, getBook]);

  return (
    <>
      <div>{bookDetails?.volumeInfo.title}</div>
      {isLoading && <Loading />}
      {/* <Header padding='2rem'>
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
            <Button
              width={40}
              //</form>onClick={(e) => handleSearch(e)}
              type='submit'
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>
        </Row>
      </Header> */}
      {/* {bookList.length > 0 && (
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
      )} */}
    </>
  );
};
