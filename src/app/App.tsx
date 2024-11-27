import './App.css';
import '@mantine/core/styles.css';

import { useState } from 'react';

import { Pages } from '@/pages';
import { MediaData } from '@/shared/ts';
import { AppHeader } from '@/widgets';
import { AppShell, Space } from '@mantine/core';

const instanceMediaData = {} as MediaData;

/**
 * Component. Корневой компонент
 * @name App
 * @layer App
 * @returns JSX
 */
export const App = () => {
  // Хранилище для данных первого поиска
  const [mediaData, setMediaData] = useState(instanceMediaData);

  return (
    <AppShell>
      <AppHeader setData={setMediaData} />
      <Space h={85} />
      <Pages mediaData={mediaData} />
      <Space h={30} />
    </AppShell>
  );
};
