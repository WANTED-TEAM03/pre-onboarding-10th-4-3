import { TODO_RESOURCE } from '../constants/config';
import apiRequest from './index';

export const getTodoList = async () => {
  try {
    const response = await apiRequest.get<Todo[]>(`${TODO_RESOURCE}`);

    return response.data;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};

export const createTodo = async (newTodo: { title: string }) => {
  try {
    const response = await apiRequest.post<Todo>(`${TODO_RESOURCE}`, newTodo);

    return response.data;
  } catch (error) {
    throw new Error('API createTodo error');
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await apiRequest.delete<Todo>(`${TODO_RESOURCE}/${id}`);

    return response.data;
  } catch (error) {
    throw new Error('API deleteTodo error');
  }
};
