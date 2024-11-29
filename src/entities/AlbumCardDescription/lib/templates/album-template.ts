import { releaseDate } from '@/shared/lib';
import { ItemMediaData } from '@/shared/ts';

export const albumTemplate = (album: ItemMediaData) => {
  return [
    { label: 'Альбом: ', value: album.collectionName },
    { label: 'Дата релиза: ', value: releaseDate.format(new Date(album.releaseDate)) },
    { label: 'Жанр: ', value: album.primaryGenreName },
    { label: 'Количество треков: ', value: album.trackCount },
    { label: 'Лэйбл: ', value: album.copyright },
  ];
};
