import { FC, useCallback, useEffect, useState } from 'react';

import { INITIAL_QUERY_PARAMS } from '@/shared/constants';
import { useDebounce, useMusicQuery } from '@/shared/lib';
import { SearchInputProps } from '@/shared/ts';
import { CloseButton, Flex, Input, Loader } from '@mantine/core';

import { separateData } from '../lib';

/**
 * Component. Строка поиска
 * @name SearchInput
 * @layer features
 * @param SearchInputProps
 * @prop setData - функция записи данных в хранилище
 * @returns JSX
 */
export const SearchInput: FC<SearchInputProps> = ({ setData }) => {
  const [term, setTerm] = useState(() => sessionStorage.term ?? '');
  const [isEnabled, setIsEnabled] = useState(true);

  const { data, isFetching, isFetched } = useMusicQuery(
    { ...INITIAL_QUERY_PARAMS, term },
    isEnabled,
  );

  useEffect(() => {
    // Записывает в браузерное сессионное хранилище поисковую фразу
    // для использования ее на разных страницах приложения
    sessionStorage.setItem('term', term);
    // Если загружены найдены, записывает их в хранилище
    if (data) setData(separateData(data));
    // После окончания загрузки опускает флаг для опции enabled
    if (isFetched) setIsEnabled(false);
  }, [data, isFetched]);

  // Обработчик кнопки очистки строки поиска
  const handleRightSectionClickBtn = () => {
    setTerm('');
    sessionStorage.clear();
  };

  // Хук для отложенных запросов
  const debouncedValue = useDebounce((newValue) => {
    if (newValue) {
      setIsEnabled((prev) => !prev);
    }
  }, 500);

  // Обработчик ввода в строку поиска
  const handleSelectSearch = useCallback(
    (newValue: string) => {
      setTerm(newValue);
      debouncedValue(newValue);
    },
    [debouncedValue],
  );

  // Управляет сменой иконок в правой части поисковой строки
  const rightSection = () => (
    <>
      {isFetching ? (
        <Loader size={20} />
      ) : (
        <CloseButton
          aria-label='Очистить поиск'
          onClick={handleRightSectionClickBtn}
          radius='lg'
          style={{ display: term ? undefined : 'none' }}
        />
      )}
    </>
  );

  return (
    <Flex gap={10}>
      <Input
        inputSize='100'
        onChange={(event) => handleSelectSearch(event.currentTarget.value)}
        placeholder='Введите имя исполнителя'
        radius='lg'
        rightSection={rightSection()}
        rightSectionPointerEvents='all'
        value={term}
      />
    </Flex>
  );
};
