import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <Route element={<MainPage mediaData={mediaData} />} path='/' />
      <Route element={<SongsPage />} path='/songs' />
      <Route element={<AlbumsPage />} path='/albums' />
      <Route element={<AlbumPage />} path='/albums/:itemId' />
    </Routes>
  );
};
