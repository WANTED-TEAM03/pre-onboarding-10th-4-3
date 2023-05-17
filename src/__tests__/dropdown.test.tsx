import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dropdown from '../components/Dropdown';

const DropdownProps = {
  keyword: 'a',
  recommendList: ['a', 'aba', 'abc', 'abaca', 'abcde', 'abcdef'],
  isSearching: false,
  handleClick: jest.fn(),
  getMoreItem: jest.fn(),
  hasNextPage: false,
  scrollRef: React.createRef<HTMLUListElement>(),
};

describe('Dropdown 컴포넌트 테스트', () => {
  beforeEach(() => {
    render(<Dropdown {...DropdownProps} />);
  });

  test('추천 검색어 배열 길이만큼 드롭다운 리스트 생성', () => {
    const dropdownItems = screen.getAllByTestId('dropdown-item');

    expect(dropdownItems.length).toBe(DropdownProps.recommendList.length);
  });

  test('모든 추천 검색어 리스트에서 입력값과 일치하는 문자열은 글자색 강조 스타일링 적용', () => {
    const keywords = screen.getAllByText(DropdownProps.keyword);
    const accentTexts = screen.getAllByTestId('accent-text');

    expect(keywords).toMatchObject(accentTexts);
  });
});
