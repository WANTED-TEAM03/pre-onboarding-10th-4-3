import { ImSpinner8 } from 'react-icons/im';

import styles from './styles.module.css';

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  const classNames = [styles.spinner, className].join(' ');
  return <ImSpinner8 className={classNames} />;
};

export default LoadingSpinner;
