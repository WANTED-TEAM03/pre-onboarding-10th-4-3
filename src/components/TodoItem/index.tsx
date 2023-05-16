import { useCallback, useState } from 'react';
import { deleteTodo } from '../../api/todo';
import LoadingSpinner from '../shared/LoadingSpinner';
import TrashButton from '../shared/TrashButton';
import styles from './styles.module.css';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);

      await deleteTodo(id);
      setTodos((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');

      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className={styles.item}>
      <span>{title}</span>
      <div className={styles.item_option}>
        {!isLoading ? (
          <TrashButton onClick={handleRemoveTodo} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
