import { useRef } from "react";

const useFocus = () => {
  const ref = useRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
