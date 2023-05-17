import { useEffect, useRef, useState } from 'react';
import { DEFAULT_NEXT_PAGE, DEFAULT_PAGE } from '../constants/search';
import { getSearchedList } from '../api/search';

const useSearch = (inputText: string) => {
  const [isSearching, setIsSearching] = useState(false);
  const [nextPage, setNextPage] = useState(DEFAULT_PAGE);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [recommendList, setRecommendList] = useState<string[]>([]);

  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo(0, 0);
  };

  const getMoreItem = async () => {
    if (!hasNextPage) return;

    setIsSearching(true);

    const moreItem = await getSearchedList(inputText, nextPage);
    setRecommendList((prev) => [...prev, ...moreItem.result]);

    if (moreItem.qty < moreItem.limit) setHasNextPage(false);
    setNextPage((prev) => prev + 1);

    setIsSearching(false);
  };

  useEffect(() => {
    setNextPage(DEFAULT_NEXT_PAGE);

    const fetchAutocompleteWords = async () => {
      const text = inputText.trim().toLowerCase();
      if (text === '') {
        setRecommendList([]);
        return;
      }

      try {
        setIsSearching(true);

        const response = await getSearchedList(inputText);
        const { limit, page, qty, total, result } = response;

        if (limit * (page - DEFAULT_PAGE) + qty < total) setHasNextPage(true);
        scrollToTop();
        setRecommendList(result);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setIsSearching(false);
      }
    };

    fetchAutocompleteWords();
  }, [inputText]);

  return {
    isSearching,
    recommendList,
    hasNextPage,
    scrollRef,
    getMoreItem,
  };
};

export default useSearch;
