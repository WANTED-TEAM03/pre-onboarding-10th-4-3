import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

import { createTodo } from "../api";
import useFocus from "../hooks/useFocus";
import { uuid } from "../utils";

const InputTodo = ({ setTodos }) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const trimmed = inputText.trim();
      if (!trimmed) {
        alert("Please write item");
        return;
      }

      setIsLoading(true);
      const newItem = { id: uuid(), title: trimmed };
      await createTodo(newItem);
      setTodos((prev) => [...prev, newItem]);

      setInputText("");
      setIsLoading(false);
    },
    [inputText, setTodos],
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
