import { MediaResponse, RequestParams } from '../ts';

const baseURL = 'https://itunes.apple.com';

type ParamKeys = 'term' | 'media' | 'entity' | 'limit';

// Собирает параметры запроса в строку
const combineRequestString = (params: RequestParams) => {
  let paramStrings = [];
  for (let key of Object.keys(params)) {
    if (params[key as ParamKeys] !== null) paramStrings.push(`${key}=${params[key as ParamKeys]}`);
  }
  return paramStrings.join('&');
};

/**
 * API. Запрос на сервер iTunes
 * @name mediaRequest
 * @layer shared/api
 * @param {RequestParams} params - параметры запроса
 * @returns {Promise<MediaResponse>}
 */
export async function mediaRequest(params: RequestParams): Promise<MediaResponse> {
  return await fetch(`${baseURL}/search?${combineRequestString(params)}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('Ошибка загрузки данных');
      return res.json();
    })
    .catch((err) => console.error(err));
}
