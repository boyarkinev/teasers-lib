import { MediasTemplate } from '@/shared/ts';
import { Button, Divider, Space, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { FC } from 'react';

type ShowMoreButtonProps = { media: MediasTemplate };

/**
 * Component. Выводит кнопку перехода на страницу с расширенной информацией
 * @name ShowMoreButton
 * @layer features
 * @param ShowMoreButtonProps
 * @prop {MediasTemplate} media - данные для кнопки
 * @returns JSX
 */
export const ShowMoreButton: FC<ShowMoreButtonProps> = ({ media }) => {
  const { colors } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return media.isRouteShow ? (
    <Divider
      my='md'
      label={
        <Button
          color={colors.gray[colorScheme === 'dark' ? 8 : 5]}
          radius='lg'
          leftSection={media.icon}
          onClick={media.handler}
          size='compact-sm'>
          Все {media.label}...
        </Button>
      }
      labelPosition='right'
    />
  ) : (
    <Space h={26} />
  );
};
