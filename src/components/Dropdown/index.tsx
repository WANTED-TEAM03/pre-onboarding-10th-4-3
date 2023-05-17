import useIntersectionObserver from '../../hooks/useIntersectonObserver';
import DropdownItem from '../DropdownItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import styles from './styles.module.css';

type DropdownProps = {
  recommendList: string[];
  isSearching: boolean;
  handleClick: (value: string) => () => Promise<void>;
  keyword: string;
  getMoreItem: () => Promise<void>;
  hasNextPage: boolean;
  scrollRef: React.RefObject<HTMLUListElement>;
};

const Dropdown = ({
  scrollRef,
  keyword,
  recommendList,
  isSearching,
  hasNextPage,
  handleClick,
  getMoreItem,
}: DropdownProps) => {
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isSearching) return;
    if (isIntersecting) getMoreItem();
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <ul className={styles.dropdown} ref={scrollRef}>
      {recommendList.map((searchWord, index) => (
        <DropdownItem
          key={index}
          searchWord={searchWord}
          keyword={keyword}
          handleClick={handleClick}
        />
      ))}
      {isSearching && <LoadingSpinner className={styles.align_center} />}
      {!isSearching && hasNextPage && (
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
