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
  Container,
  Image
} from 'components';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ThemeType } from '@/themes';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { convert } from '@/utils';
import { maxWidth } from 'styled-system';

type RouteParams = {
  bookId: string;
};

export const BookDetails = () => {
  const theme = useTheme() as ThemeType;
  const { bookId } = useParams<RouteParams>();
  const { bookDetails, getBook, isLoading } = useBooks();
  const { volumeInfo } = bookDetails;

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
      {isLoading && <Loading />}
      <Container alignItems='flex-start' pb='2rem'>
        <Header p='2rem' alignItems='flex-start' pt={50}>
          <Text fontSize='3rem' fontWeight='bold'>
            {volumeInfo?.title}
          </Text>
          <Text fontSize='1.2rem'>
            {volumeInfo?.authors
              ? 'Autores: ' + volumeInfo?.authors.join(', ')
              : 'Sem autores'}
          </Text>
          <Row justifyContent='flex-start'>
            {volumeInfo?.publishedDate && (
              <Text lineClamp={1}>
                {`Data de publicação:  ${convert.dateToLocal(
                  volumeInfo?.publishedDate
                )}`}
              </Text>
            )}
            <Text lineClamp={1}>
              {volumeInfo?.publisher
                ? `Editora: ${volumeInfo?.publisher}`
                : 'Sem editora'}
            </Text>
          </Row>
          <Row justifyContent='flex-end'>
            {/* {volumeInfo?.pageCount && (
              <Text flex={1}>{`Páginas: ${volumeInfo?.pageCount}`}</Text>
            )} */}
            <Button
              fixedWidth={56}
              title='Favoritar'
              //</form>onClick={(e) => handleSearch(e)}
              type='submit'
            >
              <FontAwesomeIcon icon={faHeart} size='3x' />
            </Button>
          </Row>
        </Header>
        <Row justifyContent='flex-start' alignItems='flex-start' broken>
          <Image url={volumeInfo?.imageLinks?.thumbnail} />
          <Text
            color={theme.colors.textDark}
            flex={2}
            px='1rem'
            lineClamp='none'
          >
            {volumeInfo?.description || 'Sem descrição.'}
          </Text>
        </Row>
        <Text fontSize='1rem' color={theme.colors.textDark}>
          {volumeInfo?.categories
            ? 'Categorias: ' + volumeInfo?.categories.join(', ')
            : 'Sem categorias'}
        </Text>
        <Row justifyContent='flex-start' alignItems='flex-start' mt={30} broken>
          <Button
            fontSize='1.1rem'
            onClick={() => window.open(volumeInfo?.previewLink, '_blank')}
          >
            Ver amostra
          </Button>
          <Button
            fontSize='1.1rem'
            onClick={() => window.open(volumeInfo?.infoLink, '_blank')}
          >
            Ver na Google Play
          </Button>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Text
            title={volumeInfo?.description}
            color={theme.colors.textSecondary}
          >
            {volumeInfo?.description}
          </Text>
          <Image url={volumeInfo?.imageLinks?.thumbnail} />
        </Row>
      </Container> */}
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
