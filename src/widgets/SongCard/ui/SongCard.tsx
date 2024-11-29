import './SongCard.css';

import { FC } from 'react';

import { PlayControl } from '@/features';
import { ItemCardProps } from '@/shared/ts';
import { Card, Flex, Grid, Image, Text } from '@mantine/core';

import { songDescriptionTemplate } from '../lib';

/**
 * Component. Карточка альбома исполнителя
 * @name SongCard
 * @param ItemCardProps
 * @prop {ItemMusicData} data - данные песни
 * @returns JSX
 */
export const SongCard: FC<ItemCardProps> = ({ data }) => {
  const cardDescription = songDescriptionTemplate(data);

  return (
    <Grid.Col span={4}>
      <Card shadow='md' padding='sm' radius='lg' withBorder>
        <Grid align='center' justify='center'>
          <Grid.Col span={3}>
            <Image
              alt={data.artistName}
              className='song-card-image'
              radius='md'
              src={data.artworkUrl100}
            />
          </Grid.Col>
          <Grid.Col span={9}>
            <Flex direction='column' justify='center'>
              {cardDescription.map((el) => (
                <div className='song-card-description-wrapper' key={el.id}>
                  <Text className='song-card-description-text' size='sm'>
                    <b>{el.name}</b> {el.text}
                  </Text>
                </div>
              ))}
            </Flex>
          </Grid.Col>
          <PlayControl mediaTag='audio' src={data.previewUrl} />
        </Grid>
      </Card>
    </Grid.Col>
  );
};
