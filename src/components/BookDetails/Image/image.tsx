import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Text } from '@/components';
import { StyledImage } from './styledImage';
import { useTheme } from 'styled-components';
import { ThemeType } from '@/themes';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

type Props = {
  url: string;
};

export const Image: React.FC<Props> = ({ url }) => {
  const theme = useTheme() as ThemeType;
  return (
    <StyledImage
      backgroundImage={`url("${url}")`}
      bg={theme.colors.textPrimary}
    >
      {!url && (
        <>
          <FontAwesomeIcon
            icon={faCameraRetro}
            size='3x'
            color={theme.colors.secondary}
          />
          <Text color={theme.colors.secondary} fontWeight='bold'>
            Sem imagem
          </Text>
        </>
      )}
    </StyledImage>
  );
};
