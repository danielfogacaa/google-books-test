import React, { useCallback, useState } from 'react';
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
import { faCircleChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeType } from '@/themes';
import { useTheme } from 'styled-components';

export const Home = () => {
  const theme = useTheme() as ThemeType;
  const {
    listInfo,
    bookList,
    getAll,
    getFavoriteList,
    searchText,
    setSearchText,
    isLoading,
    startIndex
  } = useBooks();

  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  const handleScrollToTopVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setScrollToTopVisible(true);
    } else if (scrolled <= 100) {
      setScrollToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', handleScrollToTopVisible);

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
      getAll(loadMore);
    },
    [getAll, searchText]
  );

  return (
    <>
      {isLoading && <Loading />}
      {scrollToTopVisible && (
        <Button
          fixedWidth={56}
          position='fixed'
          bottom='1rem'
          right='1rem'
          zIndex={999}
          bg='transparent'
          color={theme.colors.secondary}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faCircleChevronUp} size='4x' />
        </Button>
      )}
      <Header padding='2rem' bg={theme.colors.secondary}>
        <Text fontSize='3rem' fontWeight='bold'>
          Biblioteca de livros
        </Text>
        <Text fontSize='1.5rem'>
          Encontre seus livros favoritos e descubra novos
        </Text>
        <Row>
          <form style={{ display: 'flex', gap: '0.6rem' }}>
            <Input
              width={300}
              height={50}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder='Nos ajude a encontrar seu livro...'
            />
            <Button
              fixedWidth={40}
              onClick={(e) => handleSearch(e)}
              type='submit'
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>
        </Row>
      </Header>
      <Container py='2rem'>
        <Button fontSize='1.2rem' onClick={getFavoriteList}>
          Ver favoritos
        </Button>
        {bookList.length > 0 && (
          <>
            {listInfo?.totalItems > 0 && (
              <Text fontSize='1.5rem' color={theme.colors.secondary}>
                {`Livros encontrados: ${listInfo?.totalItems}`}
              </Text>
            )}
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
          </>
        )}
      </Container>
    </>
  );
};
