import { releaseDate } from '@/shared/lib';
import { ItemMediaData } from '@/shared/ts';

/**
 * Template. Шаблон для описания альбома
 * @param {ItemMediaData} data - данные альбома
 * @returns Array<{}>
 */
export const albumDescriptionTemplate = (data: ItemMediaData) => {
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
