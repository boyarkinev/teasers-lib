import './AppHeader.css';

import { FC } from 'react';
import { useLocation } from 'react-router';

import { BackwardButton, SearchInput } from '@/features';
import { BrandDeezer, BrightnessUp, MoonOutlined } from '@/shared/assets';
import { SearchInputProps } from '@/shared/ts';
import {
  AppShell,
  Button,
  Flex,
  Image,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const { Header } = AppShell;

/**
 * Component. Шапка приложения
 * @name AppHeader
 * @layer widgets
 * @param SearchInputProps
 * @prop setData - функция записи данных в хранилище
 * @returns JSX - иконка приложения, строка поиска или кнопка "назад", переключатель темы
 */
export const AppHeader: FC<SearchInputProps> = (props) => {
  const { colors } = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { state } = useLocation();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  const schemeIsDark = colorScheme === 'dark';

  return (
    <Header
      withBorder={false}
      className='app-header'
      style={{ backgroundColor: colors.violet[schemeIsDark ? 9 : 4] }}>
      <Flex direction='row' justify='space-between' align='center' gap={20}>
        <Image src={BrandDeezer} />
        {!state ? <SearchInput {...props} /> : <BackwardButton />}
        <Button radius='xl' onClick={toggleColorScheme}>
          <Image src={schemeIsDark ? BrightnessUp : MoonOutlined} />
        </Button>
      </Flex>
    </Header>
  );
};
