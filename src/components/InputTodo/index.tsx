import { useCallback, useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
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
  const {
    isSearching,
    recommendList,
    hasNextPage,
    isFirstSearch,
    scrollRef,
    getMoreItem,
  } = useSearch(debouncedInputText);

  const addTodo = useCallback(
    async (input: string) => {
      try {
        setIsLoading(true);

        const trimmedText = input.trim();
        if (!trimmedText) {
          return alert('Please write something');
        }

        const newItem = { title: trimmedText };
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
    [setTodos],
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(inputText);
  };

  const handleClick = (value: string) => async () => {
    setInputText(value);
    addTodo(value);
  };

  useEffect(() => {
    setIsTyping(false);
  }, [debouncedInputText]);

  return (
    <div
      className={styles.form_wrapper}
      ref={setTarget}
      data-testid="form-wrapper"
    >
      {isModalOpen && recommendList.length > 0 && (
        <Dropdown
          scrollRef={scrollRef}
          keyword={debouncedInputText}
          recommendList={recommendList}
          isSearching={isSearching}
          hasNextPage={hasNextPage}
          handleClick={handleClick}
          getMoreItem={getMoreItem}
        />
      )}
      <form
        className={
          isSearching || isTyping
            ? `${styles.form_container} ${styles.accent_border}`
            : styles.form_container
        }
        onSubmit={handleSubmit}
        data-testid="form"
      >
        <div className={styles.search_bar}>
          <FaSearch />
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
            data-testid="input-text"
          />
        </div>
        {!isLoading && isFirstSearch && isSearching && <LoadingSpinner />}
        {!isLoading ? (
          <PlusButton className={styles.test} />
        ) : (
          <LoadingSpinner />
        )}
      </form>
    </div>
  );
};

export default InputTodo;
