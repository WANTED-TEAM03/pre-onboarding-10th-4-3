import { AiOutlineEllipsis } from 'react-icons/ai';
import useIntersectionObserver from '../../hooks/useIntersectonObserver';
import DropdownItem from '../DropdownItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import styles from './styles.module.css';

type DropdownProps = {
  scrollRef: React.RefObject<HTMLUListElement>;
  keyword: string;
  recommendList: string[];
  isSearching: boolean;
  hasNextPage: boolean;
  handleClick: (value: string) => () => Promise<void>;
  getMoreItem: () => Promise<void>;
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
    <ul className={styles.dropdown} data-testid="dropdown" ref={scrollRef}>
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
          <AiOutlineEllipsis />
        </span>
      )}
    </ul>
  );
};

export default Dropdown;
