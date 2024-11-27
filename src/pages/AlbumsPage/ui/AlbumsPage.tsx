import { useEffect } from 'react';

import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { collator, useMusicQuery } from '@/shared/lib';
import { AlbumCard } from '@/widgets';
import { Container, Grid, Loader, useMantineTheme } from '@mantine/core';

/**
 * Component. Страница альбомов исполнителя
 * @name AlbumsPage
 * @layer pages
 * @returns JSX
 */
export const AlbumsPage = () => {
  const { colors } = useMantineTheme();
  const term = sessionStorage.getItem('term');

  const { data, isFetching, refetch } = useMusicQuery({
    ...INITIAL_QUERY_PARAMS,
    entity: 'album',
    limit: 50,
    term,
  });

  useEffect(() => {
    if (!data?.length) refetch();
  }, []);

  if (isFetching) return <Loader size={30} color={colors.violet[5]} />;

  const sortedData = data?.sort((a, b) => collator.compare(b.releaseDate, a.releaseDate));

  return (
    <Container px={0} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Grid>{sortedData?.map((album) => <AlbumCard data={album} key={album.collectionId} />)}</Grid>
    </Container>
  );
};
