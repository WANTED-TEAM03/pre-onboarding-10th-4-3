import { FaSpinner } from 'react-icons/fa';

import styles from './styles.module.css';

const LoadingSpinner = () => {
  return <FaSpinner className={styles.spinner} />;
};

export default LoadingSpinner;
