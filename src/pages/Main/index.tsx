import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import InputTodo from '../../components/InputTodo';
import TodoList from '../../components/TodoList';
import { getTodoList } from '../../api/todo';
import styles from './styles.module.css';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
