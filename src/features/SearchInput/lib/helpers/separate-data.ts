import { SPLICE_AMOUNT } from '@/shared/constants';
import { collator } from '@/shared/lib';
import { MediaData, ItemMusicData } from '@/shared/ts';

/**
 * Helper. Разделяет данные на песни, альбомы и видео
 * @name separateData
 * @layer features
 * @param {ItemMusicData[]} data - запрошенные данные
 * @returns MediaData
 */
export const separateData = (data: ItemMusicData[]): MediaData => {
  const songs =
    data
      ?.filter((song) => song.wrapperType === 'track' && song.kind === 'song') // забирает песни
      .sort((a, b) => collator.compare(a.trackName, b.trackName)) // сортирует по названию
      .splice(0, SPLICE_AMOUNT.SONGS) ?? []; // забирает 9 элементов
  const albums =
    data
      ?.filter((album) => album.wrapperType === 'collection') // забирает альбомы
      .sort((a, b) => collator.compare(a.releaseDate, b.releaseDate)) // сортирует по дате
      .splice(0, SPLICE_AMOUNT.ALBUMS) ?? []; // забирает 8 элементов
  const movies =
    data
      ?.filter((movie) => movie.kind === 'feature-movie' && movie.previewUrl) // забирает клипы
      .splice(0, SPLICE_AMOUNT.MOVIES) ?? []; // забирает 8 элементов
  return { songs, albums, movies };
};
