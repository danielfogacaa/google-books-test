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

export const Card: React.FC<Props> = ({ bookInfo }, props) => {
  const theme = useTheme() as ThemeType;
  const navigate = useNavigate();
  const { id, volumeInfo } = bookInfo;
  return (
    <CardContainer>
      <Details>
        <Header padding='0.6rem'>
          <Text fontSize='1.2rem' lineClamp={2} title={volumeInfo?.title}>
            {volumeInfo?.title}
          </Text>
        </Header>
        {/* <h4
          className='card-title text-dark card-text-overflow'
          title={volumeInfo?.title}
        >
          {volumeInfo?.title}
        </h4> */}
        {/* <p title={volumeInfo?.authors[0] || '-'}></p> */}
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
        </Text>
        <Text title={volumeInfo?.description} color={theme.colors.orange}>
          {volumeInfo?.description}
        </Text>
        {/* <Text>{`${volumeInfo?.pageCount} páginas`}</Text> */}
        {/* <p
          className='card-text text-secondary card-text-overflow card-description'
          title={volumeInfo?.description}
        >
          {volumeInfo?.description}
        </p> */}
        {/* <div className='row'>
          <div className='col-12 d-flex justify-content-end'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={() => navigate(`/edit-product/${id}`)}
            >
              Visualizar produto
            </button>
          </div>
        </div> */}
      </Details>
      <Thumb url={volumeInfo?.imageLinks?.thumbnail} />
    </CardContainer>
  );
};
