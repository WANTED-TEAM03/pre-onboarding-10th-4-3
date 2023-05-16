import { FaSpinner } from 'react-icons/fa';

import styles from './styles.module.css';

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  const classNames = [styles.spinner, className].join(' ');
  return <FaSpinner className={classNames} />;
};

export default LoadingSpinner;
