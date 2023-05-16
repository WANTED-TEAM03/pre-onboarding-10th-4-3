import { useRef } from 'react';

const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
