import { Backdrop } from '@/components';
import { Loader } from './Loader/loader';
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
