import { useNavigate } from 'react-router';

import { Album, Movie, Song } from '@/shared/assets';
import { SPLICE_AMOUNT } from '@/shared/constants';
import { MediaData, MediasTemplate } from '@/shared/ts';
import { AlbumCard, MovieCard, SongCard } from '@/widgets';

/**
 * Template. Собирает карточки песен, альбомов, видео для отображения на главной странице
 * @name mainPageTemplate
 * @layer pages
 * @param {MediaData} mediaData - загруженные данные
 * @returns {MediasTemplate[]}
 */
export const mainPageTemplate = (mediaData: MediaData): MediasTemplate[] => {
  const navigate = useNavigate();
  const iconProps = { size: 20, stroke: 'white' };
  const navigateOptions = { state: { prevPath: location.pathname } };
  return [
    {
      handler: () => navigate('songs', navigateOptions),
      icon: <Song {...iconProps} />,
      id: 'songs',
      isRouteShow: !!mediaData?.songs?.length && !(mediaData?.songs?.length < SPLICE_AMOUNT.SONGS),
      label: 'песни',
      layout: mediaData?.songs?.map((song) => <SongCard data={song} key={song.trackId} />),
    },
    {
      handler: () => navigate('albums', navigateOptions),
      icon: <Album {...iconProps} />,
      id: 'albums',
      isRouteShow:
        !!mediaData?.albums?.length && !(mediaData?.albums?.length < SPLICE_AMOUNT.ALBUMS),
      label: 'альбомы',
      layout: mediaData?.albums?.map((album) => (
        <AlbumCard data={album} key={album.collectionId} />
      )),
    },
    {
      handler: () => navigate('movies', navigateOptions),
      icon: <Movie {...iconProps} />,
      id: 'movies',
      isRouteShow:
        !!mediaData?.movies?.length && !(mediaData?.movies?.length < SPLICE_AMOUNT.MOVIES),
      label: 'видео',
      layout: mediaData?.movies?.map((movie) => <MovieCard data={movie} key={movie.trackId} />),
    },
  ];
};
