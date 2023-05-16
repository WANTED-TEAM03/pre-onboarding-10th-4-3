import { FaTrash } from 'react-icons/fa';

import styles from './styles.module.css';

type TrashButtonProps = {
  onClick: () => void;
};

const TrashButton = ({ onClick }: TrashButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      <FaTrash className={styles.btn_trash} />
    </button>
  );
};

export default TrashButton;
