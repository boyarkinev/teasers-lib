import './AlbumSongsList.css';

import { FC, useEffect } from 'react';

import { PlayControl } from '@/features';
import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { useMusicQuery } from '@/shared/lib';
import { Card, Flex, Loader, Text, useMantineTheme } from '@mantine/core';

type ItemAlbumSongsProps = {
  artistName: string;
  collectionName: string;
};

/**
 * Component. Список песен для страницы альбома исполнителя
 * @name AlbumSongsList
 * @layer widgets
 * @param props
 * @prop {string} artistName - имя исполнителя
 * @prop {string} collectionName - название альбома
 * @returns JSX
 */
export const AlbumSongsList: FC<ItemAlbumSongsProps> = (props) => {
  const { colors } = useMantineTheme();

  const albumTracks = useMusicQuery({
    ...INITIAL_QUERY_PARAMS,
    entity: 'song',
    limit: 20,
    term: props.collectionName,
  });

  useEffect(() => {
    if (!albumTracks.data?.length) albumTracks.refetch();
  }, []);

  if (albumTracks.isFetching) {
    return (
      <Flex justify='center' style={{ width: '100%' }}>
        <Loader size={30} color={colors.violet[5]} />
      </Flex>
    );
  }

  return albumTracks.data
    ?.sort((a, b) => a.trackNumber - b.trackNumber)
    ?.filter((song) => song.artistName === props.artistName)
    .map((song) => (
      <Card key={song.trackId} padding={8} radius='lg' shadow='md' withBorder>
        <Flex justify='space-between'>
          <Flex align='center' gap={10} className='item-album-song-wrapper'>
            <div className='song-card-description-wrapper'>
              <Text className='song-card-description-text'>
                {song.trackNumber}. {song.trackName}
              </Text>
            </div>
            <PlayControl mediaTag='audio' src={song.previewUrl} />
          </Flex>
        </Flex>
      </Card>
    ));
};
