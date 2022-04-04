import { FaSpinner, FaTrash } from "react-icons/fa";
import { useCallback, useState } from "react";

import { deleteTodo } from "../api";

const TodoItem = ({ id, title, setTodos }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    setIsLoading(true);
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
