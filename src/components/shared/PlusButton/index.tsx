import { FaPlusCircle } from 'react-icons/fa';

import styles from './styles.module.css';

type PlusButtonProps = {
  onClick?: () => void;
};

const PlusButton = ({ onClick }: PlusButtonProps) => {
  return (
    <button className={`${styles.input_submit}`} type="submit" {...onClick}>
      <FaPlusCircle className={styles.btn_plus} />
    </button>
  );
};

export default PlusButton;
