import { useEffect, useRef, useState } from 'react';
import { DEFAULT_NEXT_PAGE, DEFAULT_PAGE } from '../constants/search';
import { getSearchedList } from '../api/search';

const useSearch = (inputText: string) => {
  const [isSearching, setIsSearching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [nextPage, setNextPage] = useState(DEFAULT_NEXT_PAGE);
  const [recommendList, setRecommendList] = useState<string[]>([]);

  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo(0, 0);
  };

  const getMoreItem = async () => {
    if (!hasNextPage) return;

    setIsSearching(true);

    try {
      const trimmedText = inputText.trim().toLowerCase();
      const response = await getSearchedList(trimmedText, nextPage);
      const { limit, page, qty, total, result } = response;

      setRecommendList((prev) => [...prev, ...result]);

      if (limit * (page - DEFAULT_PAGE) + qty >= total) setHasNextPage(false);
      setNextPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    setNextPage(DEFAULT_NEXT_PAGE);
    setIsFirstSearch(true);

    const fetchAutocompleteWords = async () => {
      const trimmedText = inputText.trim().toLowerCase();
      if (!trimmedText) {
        setRecommendList([]);
        return;
      }

      try {
        setIsSearching(true);

        const response = await getSearchedList(trimmedText);
        const { limit, page, qty, total, result } = response;

        if (limit * (page - DEFAULT_PAGE) + qty < total) setHasNextPage(true);
        scrollToTop();
        setRecommendList(result);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setIsSearching(false);
        setIsFirstSearch(false);
      }
    };

    fetchAutocompleteWords();
  }, [inputText]);

  return {
    isSearching,
    recommendList,
    hasNextPage,
    isFirstSearch,
    scrollRef,
    getMoreItem,
  };
};

export default useSearch;
