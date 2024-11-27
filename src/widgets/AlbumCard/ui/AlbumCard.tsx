import './AlbumCard.css';

import { FC } from 'react';

import { ItemCardProps } from '@/shared/ts';
import { Card, Flex, Grid, Image, Text, UnstyledButton } from '@mantine/core';

import { albumDescriptionTemplate } from '../lib';
import { useNavigate } from 'react-router';

/**
 * Component. Карточка альбома исполнителя
 * @name AlbumCard
 * @param ItemCardProps
 * @prop {ItemMusicData} data - данные альбома
 * @returns JSX
 */
export const AlbumCard: FC<ItemCardProps> = ({ data }) => {
  const navigate = useNavigate();

  // Путь для перехода при нажатии на карточку
  const routePath =
    location.pathname === '/albums' ? data.collectionId : `albums/${data.collectionId}`;

  // Данные для разметки карточки
  const albumCard = albumDescriptionTemplate(data);

  return (
    <Grid.Col span={3}>
      <Card shadow='md' padding='sm' radius='lg' withBorder>
        <UnstyledButton
          onClick={() =>
            navigate(`${routePath}`, {
              state: {
                artistName: data.artistName,
                collectionName: data.collectionName,
                collectionId: data.collectionId,
                prevPath: location.pathname,
              },
            })
          }>
          <Grid>
            <Grid.Col>
              <Image
                alt={data.artistName}
                object-fit='object-fit'
                radius='md'
                src={data.artworkUrl100}
              />
            </Grid.Col>
            <Grid.Col>
              <Flex mih={50} align='flex-start' direction='column' justify='center'>
                {albumCard.map((el) => (
                  <div className='album-card-description' key={el.id}>
                    <Text size='sm' className='album-card-description_el'>
                      <b>{el.name}</b> {el.text}
                    </Text>
                  </div>
                ))}
              </Flex>
            </Grid.Col>
          </Grid>
        </UnstyledButton>
      </Card>
    </Grid.Col>
  );
};
