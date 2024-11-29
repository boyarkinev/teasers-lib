import './AlbumCard.css';

import { FC } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/shared/constants';
import { ItemMediaData } from '@/shared/ts';
import { Card, Flex, Grid, Image, Text, UnstyledButton } from '@mantine/core';

import { albumDescriptionTemplate } from '../lib';

/**
 * Component. Карточка альбома исполнителя
 * @name AlbumCard
 * @layer widgets
 * @param ItemMediaData
 * @returns JSX
 */
export const AlbumCard: FC<ItemMediaData> = (props) => {
  const navigate = useNavigate();

  // Путь для перехода при нажатии на карточку
  const routePath =
    location.pathname === `${PATH}/albums` ? props.collectionId : `albums/${props.collectionId}`;

  // Данные для разметки карточки
  const albumCard = albumDescriptionTemplate(props);

  return (
    <Grid.Col span={3}>
      <Card shadow='md' padding='sm' radius='lg' withBorder>
        <UnstyledButton
          onClick={() =>
            navigate(`${routePath}`, {
              state: {
                artistName: props.artistName,
                collectionName: props.collectionName,
                collectionId: props.collectionId,
                prevPath: location.pathname,
              },
            })
          }>
          <Grid>
            <Grid.Col>
              <Image
                alt={props.artistName}
                object-fit='object-fit'
                radius='md'
                src={props.artworkUrl100}
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
