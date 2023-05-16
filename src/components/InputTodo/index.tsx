import { useCallback, useEffect, useState } from 'react';

import { createTodo } from '../../api/todo';
import useFocus from '../../hooks/useFocus';
import LoadingSpinner from '../shared/LoadingSpinner';
import PlusButton from '../shared/PlusButton';
import styles from './styles.module.css';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const data = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos],
  );

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <input
        className={styles.input_text}
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? <PlusButton /> : <LoadingSpinner />}
    </form>
  );
};

export default InputTodo;
