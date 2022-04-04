import { Fetch } from "../utils";

const BASE_URL = "https://fake-api.labnote.co/v1";

export const getTodoList = async () => {
  const response = await Fetch(`${BASE_URL}/todos`, {
    method: "GET",
  });

  return response;
};

export const createTodo = async (data) => {
  const response = await Fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: data,
  });
  return response;
};

export const deleteTodo = async (id) => {
  const response = await Fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  return response;
};
