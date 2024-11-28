import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { AlbumCardDescription } from '@/entities';
import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { useMusicQuery } from '@/shared/lib';
import { AlbumSongsList } from '@/widgets';
import { Card, Container, Flex, Image, Loader, useMantineTheme } from '@mantine/core';

/**
 * Component. Страница альбома исполнителя со списком песен
 * @name AlbumPage
 * @layer pages
 * @returns JSX
 */
export const AlbumPage = () => {
  const { colors } = useMantineTheme();
  const { state } = useLocation();

  const albumCover = useMusicQuery({
    ...INITIAL_QUERY_PARAMS,
    entity: 'album',
    limit: 20,
    term: state.collectionId,
  });

  useEffect(() => {
    if (!albumCover.data?.length) albumCover.refetch();
  }, []);

  if (albumCover.isFetching) return <Loader size={30} color={colors.violet[5]} />;

  return (
    <Container px={0} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {albumCover.data?.map((album) => (
        <Card key={album.collectionId} padding={18} radius='lg' shadow='md' withBorder>
          <Flex justify='space-between' gap={20}>
            <Image radius='md' src={album.artworkUrl100} style={{ minWidth: 150 }} />
            <AlbumCardDescription data={album} />
          </Flex>
        </Card>
      ))}
      <AlbumSongsList {...state} />
    </Container>
  );
};
