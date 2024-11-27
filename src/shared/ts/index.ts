import { Dispatch, SetStateAction } from 'react';

// Типизация параметров запроса
export type RequestParams = {
  term: string | null;
  media: string;
  entity: string;
  limit: number;
};
// Типизация данных песен
export type ItemMusicData = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  collectionType: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: true;
  copyright: string;
};
// Типизация ответа с сервера
export type MediaResponse = {
  resultCount: number;
  results: ItemMusicData[];
};
// Типизация данных для главной страницы
export type MediaData = {
  [key: string]: ItemMusicData[];
};
// Типизация props для компонента поисковой строки
export type SearchInputProps = {
  setData: Dispatch<SetStateAction<MediaData>>;
};
// Типизация props с данными для компонента главной страницы
export type MediaDataProps = { mediaData: MediaData };
// Типизация props с данными для компонентов-иконок
export type IconProps = { size: number; fill?: string; stroke?: string };
// Типизация props с данными для компонентов-карточек
export type ItemCardProps = { data: ItemMusicData };
// Типизация компонентов главной страницы
export type MediasTemplate = {
  handler: () => void;
  icon: JSX.Element;
  id: string;
  isRouteShow: boolean;
  label: string;
  layout: JSX.Element[];
};
