import { useCallback, useEffect, useState } from 'react';

import { createTodo } from '../../api/todo';
import LoadingSpinner from '../shared/LoadingSpinner';
import PlusButton from '../shared/PlusButton';
import useDebounce from '../../hooks/useDebounce';
import useSearch from '../../hooks/useSearch';
import useToggleModal from '../../hooks/useToggleModal';
import Dropdown from '../Dropdown';
import styles from './styles.module.css';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const debouncedInputText = useDebounce(inputText);
  const { isModalOpen, setIsModalOpen, setTarget } = useToggleModal();
  const { isSearching, recommendList, setPage, isMoreData } =
    useSearch(debouncedInputText);

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

  const handleClick = (value: string) => async () => {
    try {
      setIsLoading(true);

      setInputText(value);
      const newItem = { title: value };
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
  };

  useEffect(() => {
    setIsTyping(false);
  }, [debouncedInputText]);

  return (
    <div className={styles.form_wrapper} ref={setTarget}>
      {isModalOpen && recommendList.length > 0 && (
        <Dropdown
          recommendList={recommendList}
          isSearching={isSearching}
          setPage={setPage}
          isMoreData={isMoreData}
          handleClick={handleClick}
          keyword={debouncedInputText}
        />
      )}
      <form
        className={
          isSearching || isTyping
            ? `${styles.form_container} ${styles.accent_border}`
            : styles.form_container
        }
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input_text}
          placeholder="Add new todo..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setIsTyping(true);
          }}
          disabled={isLoading}
          autoFocus
          onFocus={() => setIsModalOpen(true)}
        />
        {!isLoading ? <PlusButton /> : <LoadingSpinner />}
      </form>
    </div>
  );
};

export default InputTodo;
