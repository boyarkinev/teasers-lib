import './SongCardDescription.css';

import { releaseDate, trackTime } from '@/shared/lib';
import { ItemCardProps } from '@/shared/ts';
import { Flex, Text } from '@mantine/core';
import { FC } from 'react';

/**
 * Component. Описание для песни исполнителя
 * @name SongCardDescription
 * @layer entities
 * @param ItemCardProps
 * @prop {ItemMusicData} song - данные альбома исполнителя
 * @returns JSX
 */
export const SongCardDescription: FC<ItemCardProps> = ({ data }) => {
  return (
    <Flex justify='space-between'>
      <div className='song-card-description-wrapper'>
        <Text className='song-card-description-text'>
          <b>{data.artistName}</b> {data.trackName},{' '}
          {releaseDate.format(new Date(data.releaseDate))}
        </Text>
      </div>
      <Text className='song-description-time'>{trackTime.format(data.trackTimeMillis)}</Text>
    </Flex>
  );
};
