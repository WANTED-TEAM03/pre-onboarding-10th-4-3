import { useEffect, useState } from "react";

import Header from "../components/Header";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { getTodoList } from "../api";

const Main = () => {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTodoList();
      setTodoListData(response);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
