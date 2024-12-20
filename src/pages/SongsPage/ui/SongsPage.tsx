import './SongsPage.css';

import { useEffect } from 'react';

import { SongCardDescription } from '@/entities';
import { PlayControl } from '@/features';
import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { useMusicQuery } from '@/shared/lib';
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
              <SongCardDescription {...song} />
              <PlayControl mediaTag='audio' src={song.previewUrl} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Container>
  );
};
