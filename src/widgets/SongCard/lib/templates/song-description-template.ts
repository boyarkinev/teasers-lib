import { ItemMediaData } from '@/shared/ts';

/**
 * Template> Шаблон для описания песни
 * @param {ItemMediaData} data - данные песни
 * @returns Array<{}>
 */
export const songDescriptionTemplate = (data: ItemMediaData) => {
  return [
    { id: 'artist', name: 'Исполнитель', text: data.artistName },
    { id: 'song', name: 'Песня', text: data.trackName },
    { id: 'album', name: 'Альбом', text: data.collectionName },
  ];
};
