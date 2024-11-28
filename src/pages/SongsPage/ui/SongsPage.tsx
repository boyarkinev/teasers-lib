import './SongsPage.css';

import { useEffect } from 'react';

import { SongCardDescription } from '@/entities';
import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { useAutoPlayNext, useMusicQuery, usePause } from '@/shared/lib';
import { Card, Container, Flex, Image, Loader, useMantineTheme } from '@mantine/core';

/**
 * Component. Страница песен исполнителя
 * @name SongsPage
 * @layer pages
 * @returns JSX
 */
export const SongsPage = () => {
  const { colors } = useMantineTheme();
  const term = sessionStorage.getItem('term');

  usePause('audio');
  useAutoPlayNext('audio');

  const { data, isFetching, refetch } = useMusicQuery({
    ...INITIAL_QUERY_PARAMS,
    entity: 'song',
    limit: 20,
    term,
  });

  useEffect(() => {
    if (!data?.length) refetch();
  }, []);

  if (isFetching) return <Loader size={30} color={colors.violet[5]} />;

  return (
    <Container className='app-songs-page-container' px={0}>
      {data?.map((song) => (
        <Card key={song.trackId} padding={8} radius='lg' shadow='md' withBorder>
          <Flex justify='space-between' gap={10}>
            <Image className='app-songs-page-img' radius='md' src={song.artworkUrl100} />
            <Flex direction='column' className='app-el-wth-100'>
              <SongCardDescription data={song} />
              <audio controls src={song.previewUrl} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Container>
  );
};
