import { ItemMusicData } from '@/shared/ts';

/**
 * Template> Шаблон для описания песни
 * @param {ItemMusicData} data - данные песни
 * @returns Array<{}>
 */
export const songDescriptionTemplate = (data: ItemMusicData) => {
  return [
    { id: 'artist', name: 'Исполнитель', text: data.artistName },
    { id: 'song', name: 'Песня', text: data.trackName },
    { id: 'album', name: 'Альбом', text: data.collectionName },
  ];
};
