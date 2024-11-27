import './MainPage.css';

import { FC } from 'react';

import { ShowMoreButton } from '@/features';
import { MediaDataProps } from '@/shared/ts';
import { Center, Flex, Grid } from '@mantine/core';

import { mediasTemplate } from '../lib';

/**
 * Component. Главная страница. Отображает карточки песен, альбомов, видео исполнителя
 * @name MainPage
 * @layer pages
 * @param MediaDataProps
 * @prop {MediaData} mediaData - загруженные данные
 * @returns JSX
 */
export const MainPage: FC<MediaDataProps> = ({ mediaData }) => {
  const medias = mediasTemplate(mediaData);

  return (
    <Center>
      <Flex className='all-page-wrapper' direction='column' gap={20}>
        {medias.map((media) => (
          <span key={media.id}>
            <Grid>{media.layout}</Grid>
            <ShowMoreButton media={media} />
          </span>
        ))}
      </Flex>
    </Center>
  );
};
