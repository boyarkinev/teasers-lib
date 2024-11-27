import { releaseDate } from '@/shared/lib';
import { ItemMusicData } from '@/shared/ts';

export const albumTemplate = (album: ItemMusicData) => {
  return [
    { label: 'Альбом: ', value: album.collectionName },
    { label: 'Дата релиза: ', value: releaseDate.format(new Date(album.releaseDate)) },
    { label: 'Жанр: ', value: album.primaryGenreName },
    { label: 'Количество треков: ', value: album.trackCount },
    { label: 'Лэйбл: ', value: album.copyright },
  ];
};
