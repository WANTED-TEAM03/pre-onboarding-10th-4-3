import { splitTextWithKeyword } from '../../utils/splitTextWithKeyword';
import styles from './styles.module.css';

type DropdownItemProps = {
  searchWord: string;
  keyword: string;
  handleClick: (value: string) => () => Promise<void>;
};

const DropdownItem = ({
  searchWord,
  keyword,
  handleClick,
}: DropdownItemProps) => {
  return (
    <li
      className={styles.dropdown_item}
      onClick={handleClick(searchWord)}
      data-testid="dropdown-item"
    >
      {splitTextWithKeyword(searchWord, keyword).map((text, index) => (
        <span
          key={index}
          className={text === keyword ? styles.accent_text : ''}
          data-testid={text === keyword ? 'accent-text' : ''}
        >
          {text}
        </span>
      ))}
    </li>
  );
};

export default DropdownItem;
