import React from 'react';
import { Text } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import { ThumbContainer } from './thumb';
import { ThumbImage } from './thumbImage';
import { useTheme } from 'styled-components';
import { ThemeType } from '@/themes';

type Props = {
  url: string;
};

export const Thumb: React.FC<Props> = ({ url }) => {
  const theme = useTheme() as ThemeType;
  return (
    <ThumbContainer>
      {url ? (
        <ThumbImage backgroundImage={`url("${url}")`} clamp />
      ) : (
        <ThumbImage background={theme.colors.textPrimary} clamp>
          <FontAwesomeIcon
            icon={faCameraRetro}
            size='3x'
            color={theme.colors.secondary}
          />
          <Text color={theme.colors.secondary} fontWeight='bold'>
            Sem imagem
          </Text>
        </ThumbImage>
      )}
    </ThumbContainer>
  );
};
