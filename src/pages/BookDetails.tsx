import React, { useEffect, useState } from 'react';
import { useBooks } from 'hooks';
import {
  Loading,
  Header,
  Row,
  Text,
  Button,
  Container,
  Image,
  Modal
} from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ThemeType } from '@/themes';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { convert } from '@/utils';

type RouteParams = {
  bookId: string;
};

export const BookDetails = () => {
  const theme = useTheme() as ThemeType;
  const { bookId } = useParams<RouteParams>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { bookDetails, getBook, favoriteBook, isLoading } = useBooks();
  const { volumeInfo } = bookDetails;

  useEffect(() => {
    async function loadBook() {
      try {
        await getBook(bookId);
      } catch (error) {
        setModalVisible(true);
      }
    }
    if (bookId) {
      loadBook();
    }
  }, [bookId, getBook]);

  return (
    <>
      {isLoading && <Loading />}
      {modalVisible && <Modal></Modal>}
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
            {volumeInfo?.pageCount && (
              <Text flex={1}>{`Páginas: ${volumeInfo?.pageCount}`}</Text>
            )}
            <Button
              fixedWidth={56}
              title='Favoritar'
              onClick={() => favoriteBook(!!bookDetails.favorite)}
              type='submit'
            >
              <FontAwesomeIcon
                icon={faHeart}
                size='3x'
                color={`${
                  bookDetails?.favorite
                    ? theme.colors.favorite
                    : theme.colors.textPrimary
                }`}
              />
            </Button>
          </Row>
        </Header>
        <Row justifyContent='flex-start' alignItems='flex-start' broken>
          <Image url={volumeInfo?.imageLinks?.thumbnail} />
          <Text
            color={theme.colors.textDark}
            flex={2}
            fontSize='1.1rem'
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
    </>
  );
};
