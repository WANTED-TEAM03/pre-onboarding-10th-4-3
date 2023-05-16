import { SEARCH_RESOURCE } from '../constants/config';
import apiRequest from './index';

export const getSearchedList = async (
  keyword: string,
  page?: number,
  limit?: number,
) => {
  const params = {
    q: keyword,
    page,
    limit,
  };
  try {
    const response = await apiRequest.get<Search>(`${SEARCH_RESOURCE}`, {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error('API getSearchedList error');
  }
};
