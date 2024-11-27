import './MovieCard.css';

import { FC } from 'react';

import { MovieSVG } from '@/shared/assets';
import { ItemCardProps } from '@/shared/ts';
import { Avatar, Card, Flex, Grid, Space, Text } from '@mantine/core';
import { useAutoPlayNext, usePause } from '@/shared/lib';

/**
 * Component. Карточка альбома исполнителя
 * @name MovieCard
 * @param ItemCardProps
 * @prop {ItemMusicData} data - данные видео
 * @returns JSX
 */
export const MovieCard: FC<ItemCardProps> = ({ data }) => {
  usePause('video');
  useAutoPlayNext('video');

  return (
    <Grid.Col span={6}>
      <Card className='movie-card-wrapper' padding={0} radius='lg' shadow='lg' withBorder>
        <video className='movie-card-video' controls poster={MovieSVG} src={data.previewUrl} />
        <Space h={5} />
        <Flex align='center' className='movie-card-description-wrapper'>
          <Avatar src={data.artworkUrl100} alt={data.artistName} />
          <Space w={10} />
          <Flex className='movie-card-description' direction='column' align='flex-start'>
            <Text c='gray.0' fw='bold' size='sm'>
              {data.artistName}
            </Text>
            <Text c='gray.0' lineClamp={1} size='sm'>
              {data.trackName}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Grid.Col>
  );
};
