import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBook } from '@/interfaces';
import { Details, CardContainer, Thumb } from './';
import { Header, Text } from '@/components';
import { useTheme } from 'styled-components';
import { ThemeType } from '@/themes';

type Props = {
  bookInfo: IBook;
};

export const Card: React.FC<Props> = ({ bookInfo }) => {
  const theme = useTheme() as ThemeType;
  const navigate = useNavigate();
  const { id, volumeInfo } = bookInfo;

  const handleCardClick = () => {
    navigate(`/book-details/${id}`);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <Details>
        <Header padding='0.6rem'>
          <Text fontSize='1.2rem' lineClamp={2} title={volumeInfo?.title}>
            {volumeInfo?.title}
          </Text>
        </Header>
        <Text
          fontSize='0.9rem'
          my='0.6rem'
          title={
            volumeInfo?.authors ? volumeInfo?.authors.join(', ') : 'Sem autores'
          }
        >
          {volumeInfo?.authors
            ? 'Autores: ' + volumeInfo?.authors.join(', ')
            : 'Sem autores'}
        </Text>
        <Text
          lineClamp={1}
          title={
            volumeInfo?.publisher
              ? 'Editora: ' + volumeInfo?.publisher
              : 'Sem editora'
          }
        >
          {volumeInfo?.publisher
            ? 'Editora: ' + volumeInfo?.publisher
            : 'Sem editora'}
        </Text>
        <Text
          title={volumeInfo?.description}
          color={theme.colors.textSecondary}
        >
          {volumeInfo?.description}
        </Text>
      </Details>
      <Thumb url={volumeInfo?.imageLinks?.thumbnail} />
    </CardContainer>
  );
};
