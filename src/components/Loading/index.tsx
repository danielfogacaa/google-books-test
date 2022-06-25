import { Backdrop } from './Backdrop';
import { Loader } from './Loader';
import { Text } from 'components';
import React from 'react';

export const Loading: React.FC = () => {
  return (
    <Backdrop>
      <Loader />
      <Text fontSize='2rem' fontWeight='bold'>
        Loading...
      </Text>
    </Backdrop>
  );
};
