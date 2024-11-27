import { useRef, useEffect } from 'react';

/**
 * Hook. Хук для работы с отложенными вызовами
 * @param func - callback функция, которая выполняется по таймеру
 * @param delay - задержка
 * @param cleanUp - флаг очистки
 */
export const useDebounce = (func: (arg: string) => void, delay: number, cleanUp = false) => {
  const timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | undefined> = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args: [string]) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
};
