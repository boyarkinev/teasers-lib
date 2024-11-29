import './SongCardDescription.css';

import { releaseDate, trackTime } from '@/shared/lib';
import { ItemMediaData } from '@/shared/ts';
import { Flex, Text } from '@mantine/core';
import { FC } from 'react';

/**
 * Component. Описание для песни исполнителя
 * @name SongCardDescription
 * @layer entities
 * @param ItemMediaData
 * @returns JSX
 */
export const SongCardDescription: FC<ItemMediaData> = (props) => {
  return (
    <Flex justify='space-between'>
      <div className='song-card-description-wrapper'>
        <Text className='song-card-description-text'>
          <b>{props.artistName}</b> {props.trackName},{' '}
          {releaseDate.format(new Date(props.releaseDate))}
        </Text>
      </div>
      <Text className='song-description-time'>{trackTime.format(props.trackTimeMillis)}</Text>
    </Flex>
  );
};
