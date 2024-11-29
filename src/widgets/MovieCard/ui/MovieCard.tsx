import './MovieCard.css';

import { FC } from 'react';

import { ItemMediaData } from '@/shared/ts';
import { Avatar, Card, Flex, Grid, Space, Text } from '@mantine/core';
import { PlayControl } from '@/features';

/**
 * Component. Карточка альбома исполнителя
 * @name MovieCard
 * @layer widgets
 * @param ItemMediaData
 * @returns JSX
 */
export const MovieCard: FC<ItemMediaData> = (props) => {
  return (
    <Grid.Col span={6}>
      <Card className='movie-card-wrapper' padding={0} radius='lg' shadow='lg' withBorder>
        <PlayControl mediaTag='video' src={props.previewUrl} />
        <Space h={5} />
        <Flex align='center' className='movie-card-description-wrapper'>
          <Avatar src={props.artworkUrl100} alt={props.artistName} />
          <Space w={10} />
          <Flex className='movie-card-description' direction='column' align='flex-start'>
            <Text c='gray.0' fw='bold' size='sm'>
              {props.artistName}
            </Text>
            <Text c='gray.0' lineClamp={1} size='sm'>
              {props.trackName}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Grid.Col>
  );
};
