import './SongCard.css';

import { FC } from 'react';

import { PlayControl } from '@/features';
import { ItemMediaData } from '@/shared/ts';
import { Card, Flex, Grid, Image, Text } from '@mantine/core';

import { songDescriptionTemplate } from '../lib';

/**
 * Component. Карточка альбома исполнителя
 * @name SongCard
 * @layer widgets
 * @param ItemMediaData
 * @returns JSX
 */
export const SongCard: FC<ItemMediaData> = (props) => {
  const cardDescription = songDescriptionTemplate(props);

  return (
    <Grid.Col span={4}>
      <Card shadow='md' padding='sm' radius='lg' withBorder>
        <Grid align='center' justify='center'>
          <Grid.Col span={3}>
            <Image
              alt={props.artistName}
              className='song-card-image'
              radius='md'
              src={props.artworkUrl100}
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
          <PlayControl mediaTag='audio' src={props.previewUrl} />
        </Grid>
      </Card>
    </Grid.Col>
  );
};
