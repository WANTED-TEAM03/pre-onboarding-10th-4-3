import { useEffect, useState } from 'react';

type ReturnType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLElement | null | undefined>
  >;
};

const useToggleModal = (): ReturnType => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!target) return;

    const handleCloseModal = (e: Event | React.MouseEvent) => {
      if (isModalOpen && (!target || !target.contains(e.target as Node)))
        setIsModalOpen(false);
    };
    window.addEventListener('mousedown', handleCloseModal);
    return () => {
      window.removeEventListener('mousedown', handleCloseModal);
    };
  }, [target, isModalOpen]);

  return { isModalOpen, setIsModalOpen, setTarget };
};

export default useToggleModal;
