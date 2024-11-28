import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from '@/shared/constants';
import { MediaDataProps } from '@/shared/ts';

import { AlbumPage } from './AlbumPage/ui/AlbumPage';
import { AlbumsPage } from './AlbumsPage/ui/AlbumsPage';
import { MainPage } from './MainPage/ui/MainPage';
import { SongsPage } from './SongsPage/ui/SongsPage';

/**
 * Component. Выполняет routing по страницам
 * @param PagesProps
 * @prop MediaData
 * @returns JSX
 */
export const Pages: FC<MediaDataProps> = ({ mediaData }) => {
  return (
    <Routes>
      <Route element={<MainPage mediaData={mediaData} />} path={PATH} />
      <Route element={<SongsPage />} path={`${PATH}/songs`} />
      <Route element={<AlbumsPage />} path={`${PATH}/albums`} />
      <Route element={<AlbumPage />} path={`${PATH}/albums/:itemId`} />
    </Routes>
  );
};
