import { FaPlusCircle } from 'react-icons/fa';

import styles from './styles.module.css';

type PlusButtonProps = {
  className?: string;
  onClick?: () => void;
};

const PlusButton = ({ className, onClick }: PlusButtonProps) => {
  const classNames = [styles.input_submit, className].join(' ');
  return (
    <button className={classNames} type="submit" {...onClick}>
      <FaPlusCircle className={styles.btn_plus} />
    </button>
  );
};

export default PlusButton;
