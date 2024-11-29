import { Flex, Text, Title } from '@mantine/core';
import { albumTemplate } from '../lib';
import { ItemMediaData } from '@/shared/ts';
import { FC } from 'react';

const widthStyle = { width: '100%' };

/**
 * Component. Описание для обложки альбома исполнителя
 * @name AlbumCardDescription
 * @layer entities
 * @param ItemMediaData
 * @returns JSX
 */
export const AlbumCardDescription: FC<ItemMediaData> = (props) => {
  return (
    <Flex direction='column' style={widthStyle}>
      <Flex justify='space-between'>
        <div className='song-card-description-wrapper'>
          <Title order={2}>
            <b>{props.artistName}</b>
          </Title>
          {albumTemplate(props).map((item) => (
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
