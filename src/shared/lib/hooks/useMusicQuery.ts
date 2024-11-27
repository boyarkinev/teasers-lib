import { mediaRequest } from '@/shared/api';
import { RequestParams } from '@/shared/ts';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

/**
 * Hook. Для работы с запросом и кэширования ответа
 * @name useMusicQuery
 * @layer shared/lib/hooks
 * @param {RequestParams} params - параметры запроса
 * @param isEnabled - флаг для управления параметром enabled
 * @returns результат запроса
 */
export function useMusicQuery(params: RequestParams, isEnabled?: boolean) {
  return useQuery({
    enabled: isEnabled,
    queryFn: () => mediaRequest(params),
    queryKey: ['music', params],
    placeholderData: keepPreviousData,
    select: (result) => result.results,
  });
}
