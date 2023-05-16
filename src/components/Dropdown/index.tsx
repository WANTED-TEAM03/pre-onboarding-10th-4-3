import useIntersectionObserver from '../../hooks/useIntersectonObserver';
import DropdownItem from '../DropdownItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import styles from './styles.module.css';

type DropdownProps = {
  recommendList: string[];
  isSearching: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleClick: (value: string) => () => Promise<void>;
  isMoreData: boolean;
  keyword: string;
};

const Dropdown = ({
  recommendList,
  isSearching,
  setPage,
  handleClick,
  isMoreData,
  keyword,
}: DropdownProps) => {
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isSearching) return;
    if (isIntersecting) setPage((prev) => prev + 1);
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <ul className={styles.dropdown}>
      {recommendList.map((searchWord, index) => (
        <DropdownItem
          key={index}
          searchWord={searchWord}
          keyword={keyword}
          handleClick={handleClick}
        />
      ))}
      {isSearching && <LoadingSpinner className={styles.align_center} />}
      {!isSearching && isMoreData && (
        <span
          className={`${styles.align_center} ${styles.ellipsis}`}
          ref={setTarget}
        >
          ...
        </span>
      )}
    </ul>
  );
};

export default Dropdown;
