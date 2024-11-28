import { releaseDate } from '@/shared/lib';
import { ItemMusicData } from '@/shared/ts';

/**
 * Template. Шаблон для описания альбома
 * @param {ItemMusicData} data - данные альбома
 * @returns Array<{}>
 */
export const albumDescriptionTemplate = (data: ItemMusicData) => {
  return [
    { id: 'artist', name: 'Исполнитель', text: data.artistName },
    { id: 'album', name: 'Альбом', text: data.collectionName },
    { id: 'genre', name: 'Жанр', text: data.primaryGenreName },
    {
      id: 'releaseDate',
      name: 'Релиз',
      text: releaseDate.format(new Date(data.releaseDate)),
    },
  ];
};