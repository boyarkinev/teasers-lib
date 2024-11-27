import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // Время жизни актуальности запроса
      refetchOnWindowFocus: false, // Не проверяет устарели ли данные при возвращении во вкладку/на страницу
    },
  },
});
