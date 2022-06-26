import React from 'react';

import { ThumbContainer, ThumbImage } from './thumb';

type Props = {
  url: string;
};

export const Thumb: React.FC<Props> = ({ url }) => {
  return (
    <ThumbContainer>
      <ThumbImage backgroundImage={`url("${url}")`} />
    </ThumbContainer>
  );
};
