import { Flex, Text, Title } from '@mantine/core';
import { albumTemplate } from '../lib';
import { ItemCardProps } from '@/shared/ts';
import { FC } from 'react';

const widthStyle = { width: '100%' };

/**
 * Component. Описание для обложки альбома исполнителя
 * @name AlbumPageAlbumDescription
 * @layer entities
 * @param ItemCardProps
 * @prop {ItemMusicData} album - данные альбома исполнителя
 * @returns JSX
 */
export const AlbumPageAlbumDescription: FC<ItemCardProps> = ({ data }) => {
  return (
    <Flex direction='column' style={widthStyle}>
      <Flex justify='space-between'>
        <div className='song-card-description-wrapper'>
          <Title order={2}>
            <b>{data.artistName}</b>
          </Title>
          {albumTemplate(data).map((item) => (
            <Text className='song-card-description-text' key={item.label}>
              <b>{item.label}</b>
              {item.value}
            </Text>
          ))}
        </div>
      </Flex>
    </Flex>
  );
};
