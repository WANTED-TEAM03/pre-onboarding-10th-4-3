<div align="center">
<img src="https://user-images.githubusercontent.com/83197138/235145795-a6e62810-0e0c-4ff4-bd87-7460b42825a7.png"/>

  <h2>👨‍👨‍👧‍👦 TEAM 보람삼조</h2>
  <b>인턴십 기간동안 보람찬 3조가 되자!</b>

</div>
  <br/>
<div align="center">
  
| Name    | <center>황수현</center>|<center>이준호</center> |<center>박수현</center> |<center>이상민</center> |<center>유동혁</center> |
| ------- | --------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | 
| Profile | <center> <img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/107838130?v=4" /> </center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/86146780?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/55135881?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/83197138?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/95751232?v=4" /></center>|
| GitHub | <center>[@rjsej12](https://github.com/rjsej12)</center> | <center>[@wujuno](https://github.com/wujuno) </center>| <center>[@pySoo](https://github.com/pySoo) </center>|<center>[@sangminlee98](https://github.com/sangminlee98)</center> |<center>[@robin14dev](https://github.com/robin14dev)</center> |
  
</div>

<div align="center">
  
| Name    | <center>강명주</center>|<center>박겸영</center> |<center>정정수</center> |<center>고영욱</center> |<center>추헌재</center> |
| ------- | --------------------------------------------- | ------------------------------------ | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | 
| Profile | <center> <img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/96197310?v=4" /> </center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/91963656?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/19286161?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/47565280?v=4" /></center>|<center><img width="110px" height="110px" src="https://avatars.githubusercontent.com/u/67093357?v=4" /></center>|
| GitHub | <center>[@myungju030](https://github.com/myungju030)</center> | <center>[@seoltang](https://github.com/seoltang) </center>| <center>[@wjdwjdtn92](https://github.com/wjdwjdtn92) </center>|<center>[@free-ko](https://github.com/free-ko)</center> |<center>[@Chuhj](https://github.com/Chuhj)</center> |

</div>

<br/>

# 원티드 **프리온보딩 프론트엔드 인턴십 4주차 과제**

> 과제 코드 리팩토링 + 추천 검색창 구현 + 무한 스크롤

진행 기간: 2023-05-14 ~ 2023-05-17

## 목차

- [원티드 **프리온보딩 프론트엔드 인턴십 4주차 과제**](#원티드-프리온보딩-프론트엔드-인턴십-4주차-과제)
  - [목차](#목차)
  - [배포 링크](#배포-링크)
  - [동작 화면](#동작-화면)
  - [사용한 라이브러리](#사용한-라이브러리)
  - [프로젝트 구조](#프로젝트-구조)
  - [프로젝트 실행 방법](#프로젝트-실행-방법)
  - [과제 수행 내용](#과제-수행-내용)
    - [Overview](#overview)
    - [API 요청 횟수를 줄이기 위해 Debounce 적용](#api-요청-횟수를-줄이기-위해-debounce-적용)
      - [네트워크 비용 줄이기](#네트워크-비용-줄이기)
      - [유지 보수를 위한 커스텀 훅 생성](#유지-보수를-위한-커스텀-훅-생성)
    - [useSearch hook을 통한 데이터 페칭 구현](#usesearch-hook을-통한-데이터-페칭-구현)
    - [검색어 드롭다운](#검색어-드롭다운)
      - [검색 키워드 색상 활성화](#검색-키워드-색상-활성화)
      - [검색어 변경 시 드롭다운 유지](#검색어-변경-시-드롭다운-유지)
      - [스크롤 위치 초기화](#스크롤-위치-초기화)
      - [드롭다운 토글 구현](#드롭다운-토글-구현)
    - [무한 스크롤](#무한-스크롤)
      - [1. 호출 트리거](#1-호출-트리거)
      - [2. useIntersectionObserver hook](#2-useintersectionobserver-hook)
      - [3. 호출 제한](#3-호출-제한)
    - [Jest를 이용한 단위 테스트](#jest를-이용한-단위-테스트)
      - [InputTodo 컴포넌트 테스트](#inputtodo-컴포넌트-테스트)
      - [Dropdown 컴포넌트 테스트](#dropdown-컴포넌트-테스트)

<br/>

## 배포 링크

https://pre-onboarding-10th-4-3.netlify.app/

<br/>

## 동작 화면

![demo](https://github.com/WANTED-TEAM03/pre-onboarding-10th-4-3/assets/83197138/1c0f0ab0-a5fc-4d5e-b602-b1d7fc009618)

<br/>

## 사용한 라이브러리

<div align =center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                           Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/Css-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=black"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/JEST-C21325?&style=for-the-badge&logo=Jest&logoColor=white"> <img src="https://img.shields.io/badge/React Testing Library-E33332?&style=for-the-badge&logo=Testing Library&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> |

</div>

<br/>

## 프로젝트 구조

```
📦src
├── 📂__mocks__
├── 📂__tests__
├── 📂api
├── 📂components
│   └── 📂Dropdown
|   └── 📂DropdownItem
|   └── 📂Header
|   └── 📂InputTodo
|   └── 📂TodoItem
|   └── 📂TodoList
|   └── 📂shared
│       ├── 📂LoadingSpinner
│       ├── 📂PlusButton
│       └── 📂TrashButton
├── 📂constants
├── 📂hooks
├── 📂pages
├── 📂types
└── 📂utils
```

<br/>

## 프로젝트 실행 방법

레파지토리 클론

```bash
$ git clone https://github.com/WANTED-TEAM03/pre-onboarding-10th-4-3.git
```

패키지 설치

```bash
$ yarn
```

환경 변수 입력

```
// .env

REACT_APP_API_URL=
REACT_APP_TOKEN=
```

애플리케이션 실행

```bash
$ yarn start
```

테스트 실행

```bash
$ yarn test
```

<br/>

## 과제 수행 내용

### Overview

- **기존 코드 리팩토링**

  - 기존 자바스크립트 파일을 `타입스크립트`로 마이그레이션 했습니다.
  - 기존 코드들의 타입을 정의하고 변수들을 상수화하여 constants 폴더에서 관리했습니다.
  - `CSS 모듈화`를 적용하여 코드의 재사용성을 높이고 side effect 발생 확률을 줄였습니다.
  - 공통적으로 사용하는 Spinner와 Button을 분리하여 `재사용성`을 높였습니다.

- **추천 검색창 구현**

  - `debounce`을 통해 API의 호출을 줄였습니다.
  - `useSearch` hook을 이용하여 비즈니스 로직을 UI 컴포넌트와 분리하고 데이터 페칭 기능을 구현했습니다.

- **검색어 드롭다운 구현**

  - 단어가 `키워드`와 동일한 경우 색상으로 `활성화` 기능을 구현했습니다.
  - 드롭다운 아이템 클릭 시 `Todo 리스트에 추가`되도록 구현했습니다.
  - `useToggleModal` hook을 이용하여 드롭다운 토글을 구현했습니다.

- **무한 스크롤**

  - Web API의 `IntersectionObserver`를 사용하여 마지막 아이템이 감지되면 API를 호출하는 무한 스크롤을 구현했습니다.
  - 검색 결과를 최대 10개씩 받아올 수 있도록 구현했습니다.

- **jest를 이용한 단위 테스트**
  - `<InputTodo>`, `<Dropdown>` 컴포넌트의 단위 테스트 코드를 작성하여 주요 기능 및 이벤트 발생에 따른 로직을 테스트하고자 했습니다.

<br />

### API 요청 횟수를 줄이기 위해 Debounce 적용

- 이벤트를 그룹화하여 특정 시간이 지난 후 하나의 이벤트만 발생하도록 하는 **Debounce** 기술을 사용했습니다.

#### 네트워크 비용 줄이기

1. 일정 시간 동안 검색어를 모은 `debouncedInputText`를 search API를 호출하는 `useSearch` hook에 전달합니다.

   ```ts
   // src/components/InputTodo/index.tsx

   const [inputText, setInputText] = useState('');
   ...
   const debouncedInputText = useDebounce(inputText);

   const { recommendList } = useSearch(debouncedInputText);
   ```

2. `delay` 시간을 500ms로 세팅하고, 마지막 요청 이후 API를 한 번만 호출하도록 `debounce`를 적용하여 네트워크 비용을 줄이도록 구현했습니다.

   ```ts
   // src/hooks/useSearch.ts

   useEffect(() => {
      const fetchAutocompleteWords = async () => {
        try {
          const response = await getSearchedList();
        }
        ...
      };
      fetchAutocompleteWords();
   }, [inputText]);
   ```

#### 유지 보수를 위한 커스텀 훅 생성

- 디바운스 작업의 유지 보수가 용이하도록 커스텀 훅으로 분리했습니다.
- 추후 재사용을 고려해 value의 타입을 generic `<T>` 로 선언했습니다.

  ```ts
  // src/hooks/useDebounce.ts

  export default function useDebounce<T>(value: T, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timerId);
      };
    }, [value, delay]);

    return debouncedValue;
  }
  ```

### useSearch hook을 통한 데이터 페칭 구현

- 추천 검색 기능을 구현하기 위해 다양한 상태를 사용하고 있어서 모듈화의 필요성을 느꼈습니다.
- `검색과 관련된 상태`들과 검색어 변경 시에 스크롤을 변경하고 데이터를 초기화 하는 `초기화 함수`들을 반환합니다.
- debounced된 `inputText`가 들어왔을 때, 빈 값이 아니라면 API를 호출합니다.

```ts
// src/hooks/useSearch.ts

const useSearch = (inputText: string) => {
  ...
  const scrollToTop = () => {
    scrollRef.current?.scrollTo(0, 0);
  };

  const getMoreItem = async () => {
    ...
  };

  useEffect(() => {
    ...
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
```

<br />

### 검색어 드롭다운

#### 검색 키워드 색상 활성화

- 해당 아이템에 검색한 키워드를 뽑아내는 유틸 함수 `splitTextWithKeyword` 를 만들었습니다.

  ```ts
  // src/utils/splitTextWithKeyword.ts

  export const splitTextWithKeyword = (text: string, keyword: string) => {
    const splitKey = '@#$%^';
    return text
      .replaceAll(keyword, `${splitKey}${keyword}${splitKey}`)
      .split(splitKey);
  };
  ```

- 해당 유틸함수를 통해, api를 통해 받아온 아이템들이 검색 키워드와 동일한 경우 스타일링을 해주는 기능을 구현했습니다.

  ```tsx
  // src/components/DropdownItem/index.tsx

  <li>
    {splitTextWithKeyword(searchWord, keyword).map((text, index) => (
      <span key={index} className={text === keyword ? styles.accent_text : ''}>
        {text}
      </span>
    ))}
  </li>
  ```

#### 검색어 변경 시 드롭다운 유지

- 검색어가 변경시 api 응답 결과를 초기 상태로 설정하고 검색어 리스트를 변경하는 `getMoreItem` 함수를 만들어 사용함으로써 드롭다운이 유지될 수 있도록 변경했습니다.

```ts
// src/hooks/useSearch.ts

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
```

#### 스크롤 위치 초기화

- 검색어 리스트가 변경 될 때 기존 스크롤 위치가 유지되는 현상이 있어 스크롤 위치를 초기화 할 수 있도록 변경했습니다.
- `useSearch` hook에서 return한 `scrollRef`를 드롭다운의 ref값으로 넣어주었습니다.
- API호출 시 `scrollToTop`를 실행 해 스크롤을 최상단으로 옮겨주었습니다.

```tsx
// src/components/Dropdown/index.tsx

<ul className={styles.dropdown} ref={scrollRef}>
  ~
</ul>
```

```ts
// src/hooks/useSearch.ts

const scrollRef = useRef<HTMLUListElement>(null);

const scrollToTop = () => {
  scrollRef.current?.scrollTo(0, 0);
};

useEffect(() => {
  const fetchAutocompleteWords = async () => {
    ~
    try {
      setIsSearching(true);

      const response = await getSearchedList(trimmedText);
      const { limit, page, qty, total, result } = response;

      if (limit * (page - DEFAULT_PAGE) + qty < total) setHasNextPage(true);
      scrollToTop();
      setRecommendList(result);
    }
    ~
  };

  fetchAutocompleteWords();
}, [inputText]);
```

#### 드롭다운 토글 구현

- `useToggleModal` hook을 이용하여 드롭다운 토글을 구현했습니다.
- 토글할 요소를 가르키는 `target`과 모달이 활성화된 상태인지 boolean값을 반환하는 `isModalOpen`을 반환합니다.
- `!target.contains(e.target as Node)`에서 현재 클릭한 요소가 토글할 요소(target)안에 포함된 노드 객체인지 확인하여 모달 토글 상태 여부를 결정합니다.

```ts
// src/hooks/useToggleModal.ts

import { useEffect, useState } from 'react';

type ReturnType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTarget: React.Dispatch<
    React.SetStateAction<HTMLElement | null | undefined>
  >;
};

const useToggleModal = (): ReturnType => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!target) return;

    const handleCloseModal = (e: Event | React.MouseEvent) => {
      if (isModalOpen && (!target || !target.contains(e.target as Node)))
        setIsModalOpen(false);
    };
    window.addEventListener('mousedown', handleCloseModal);
    return () => {
      window.removeEventListener('mousedown', handleCloseModal);
    };
  }, [target, isModalOpen]);

export default useToggleModal;

```

<br />

### 무한 스크롤

- 무한스크롤을 구현하기위해 스크롤 이벤트를 사용하는 경우, 과도한 이벤트의 호출로 성능 저하의 우려가 있었습니다.
- 따라서 Intersection Observer API를 사용하여 불필요한 이벤트 발생 없이 무한스크롤을 구현했습니다.
- IntersectionObserver API를 사용하는 커스텀 hook을 이용하여 10번째인 마지막 아이템이 감지되었을 때 API를 호출합니다.

#### 1. 호출 트리거

스크롤을 감지하는 영역을 `useIntersectionObserver` hook을 이용하여 설정합니다. 만약 검색 중이 아니고 마지막 아이템을 스크롤 중이라면 search API를 호출합니다.

```ts
// src/components/DropDown.ts

const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
  if (isSearching) return;
  if (isIntersecting) getMoreItem();
};

const { setTarget } = useIntersectionObserver({ onIntersect });

return(
...
{!isSearching && hasNextPage && (
  <span
    className={`${styles.align_center} ${styles.ellipsis}`}
      ref={setTarget}
  >
    ...
  </span>
)}
)
```

#### 2. useIntersectionObserver hook

커스텀 hook을 사용하여 스크롤을 감지하는 코드를 UI 컴포넌트와 분리했고 options를 인자로 받아서 재사용성을 높였습니다.

```ts
// src/components/DropDown.ts

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 1,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold },
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
```

#### 3. 호출 제한

서버에서 전달하는 데이터 total 개수와 현재의 데이터 개수를 비교하여 더 이상 받아올 데이터가 없다면 API를 호출하지 않도록 구현했습니다.

```ts
// src/hooks/useSearch.ts

const { limit, page, qty, total, result } = response;

if (limit * (page - DEFAULT_PAGE) + qty >= total) setHasNextPage(false);
```

```ts
// src/components/DropDown.ts

return(
  ...
  {!isSearching && hasNextPage && (
    <span
      className={`${styles.align_center} ${styles.ellipsis}`}
        ref={setTarget}
    >
      ...
    </span>
  )}
)
```

### Jest를 이용한 단위 테스트

#### InputTodo 컴포넌트 테스트

- 기존에 사용되고 있던 `useFocus` 커스텀 훅을 대체하여 추가한 `autoFocus` 속성을 검증하기 위해 첫 렌더링 시 자동 포커스 여부를 테스트했습니다.

```ts
// src/__tests__/inputTodo.test.tsx

expect(screen.getByTestId('input-text')).toHaveFocus();
```

- input에 입력된 입력값을 인자로 하는 디바운싱 커스텀 훅 호출 여부를 테스트했습니다.

```ts
// src/__tests__/inputTodo.test.tsx

test('input 입력 시 입력값으로 디바운싱 실행됨', () => {
  const inputText = screen.getByTestId('input-text');
  const INPUT = 'lorem';

  userEvent.type(inputText, INPUT);

  expect(useDebounce).toHaveBeenCalledWith(INPUT);
});
```

#### Dropdown 컴포넌트 테스트

- API 호출을 통해 받아오는 추천 검색어 배열과 실제 렌더링되는 드롭다운 리스트의 일치 여부를 테스트했습니다.

```ts
// src/__tests__/dropdown.test.tsx

expect(dropdownItems.length).toBe(DropdownProps.recommendList.length);
```

- 모든 추천 검색어 리스트 중 `input` 입력값과 일치하는 모든 문자열의 글자색 강조 스타일링 적용 여부를 테스트했습니다.

```ts
// src/__tests__/dropdown.test.tsx

test('모든 추천 검색어 리스트에서 입력값과 일치하는 문자열은 글자색 강조 스타일링 적용', () => {
  const keywords = screen.getAllByText(DropdownProps.keyword);
  const accentTexts = screen.getAllByTestId('accent-text');

  expect(keywords).toMatchObject(accentTexts);
});
```
