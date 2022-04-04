# 📚 사전 과제: "Toodos"

프론트엔드 경력 채용 면접에 앞서 `사전 과제`가 있습니다.
인터뷰에서 수정 및 구현 작업해주신 내용에 대해 질문을 드릴 예정입니다. 면접에서 편하게 답변을 해주시면 됩니다.

> **중요**: _설명하시는 코드를 함께 볼 수 있도록 google meet에서 **화면 공유 준비**를 부탁드립니다._

## 🎯 목표

본 과제는 개발자의 하루 일과 중 가장 기본적인 업무인 **코드 리뷰** 및 **기능 구현**입니다. 해당 리포지토리는 *Toodos*라는 이름을 가진 `React.js`로 제작된 `To-do 리스트` 앱입니다. 코드 리뷰를 통해 다른 개발자들과 협업하는 스타일과 기존 코드를 리팩토링하는 방식을 파악하고자 합니다. 또한 기능 명세서와 디자인 가이드를 통해 새로운 기능을 어떻게 구현하시는지 파악하기 위해 준비했습니다.

## 👀 코드 리뷰

- 이미 만들어진 코드의 작동 방법을 익히신 후, 개선이 필요하다고 판단되는 부분을 수정해주시면 됩니다.
- 더 나은 프로젝트 구조나, 패턴, 에러 처리, 스타일링 방법 등 자유롭게 작업해주시면 됩니다.
- 작업하신 내용은 GitHub PR을 활용해서 수정한 이유과 내용 등을 정리 부탁드립니다.

## 🛠 기능 구현

사용자가 input에 타이핑을 하면 일치하는 아이템들이 dropdown에 보여질 수 있도록 `InputTodo`에 추천 기능을 구현해주시면 됩니다.

- [디자인 가이드](some_figma_link)를 참고해서 InputTodo의 디자인 수정 및 dropdown을 새로 만들어주세요. (Bootstrap이나 Ant Design, tailwindcss와 같은 UI kit는 사용하지 않고 구현해 주세요.)
- input에 500ms로 debounce를 적용해주세요.
- dropdown에 추천된 아이템들이 처음에 10개가 나올 수 있도록 하고, 아이템이 더 있으면 무한 스크롤로 받아올 수 있도록 구현해주세요. (API는 아래를 참고 부탁드립니다. api key는 별도로 안내드립니다.)
- dropdown에서 아이템 하나를 선택하면, input의 value는 초기화가 되고 아이템이 리스트에 추가되도록 구현해주세요.

## 🔍 API

- HTTP
  - `GET https://interview-api.labnote.co/v1/todos/{query}?first={first}&last={last}`
- Parameters
  | Name | Required | Type | Description |
  | --- | --- | --- |--- |
  | query | yes | string | input에서 검색하는 단어 |
  | first | yes | number | 검색 결과에서 가져올 시작 index |
  | last | yes | number | 검색 결과에서 가져올 마지막 index (first 보다 10 이상 크더라도 10개만 반환) |
- Responses
  | Name | Type | Description |
  | --- | --- |--- |
  | 200 | Query result | 성공. 결과가 응답 페이로드에 있습니다. |
  | 460 | Error response | `last` is less than `first`. |
  | 461 | Error response | Invalid type of `first` or `last`. |
  | ... | Error response | ... |
  | Other status codes | Error response | 오류 응답 객체입니다. |
- Query result
  | Name | Type | Description |
  | --- | --- |--- |
  | todos | string[] | 검색된 todo 아이템의 목록 |
  | total | number | 검색된 총 개수 |
- Sample

  ```js
  // Request
  `GET https://interview-api.labnote.co/v1/todos/hello?first=0&last=2`

  // RESPONSE BODY (JSON)
  {
    "todos": ["hello", "Hello, there", "Nice to meet you, hello!"],
    "total": 3
  }
  ```

## 🏠 Toodos 구조

`Toodos` 앱의 폴더 구조입니다. `*`(별표)가 있는 파일은 확인 하지 않으셔도 무관합니다.

```javascript
src
 ┣ api
 ┃  ┗ index.js
 ┣ components
 ┃  ┣ Header.js
 ┃  ┣ InputTodo.js
 ┃  ┣ TodoItem.js
 ┃  ┗ TodoList.js
 ┣ hooks
 ┃  ┗ useFocus.js
 ┣ pages
 ┃  ┗ Main.js
 ┣ utils
 ┃  ┗ index.js  // *fakeDB & fakeFetch
 ┣ App.css      // *styles
 ┣ App.js
 ┗ index.js
```

<br/>

---

<br/>

## 💻 로컬 설치 및 실행방법

1. Clone this repo:

```bash
git clone ...
```

2. Install dependencies & packages

```bash
npm i
# OR
yarn
```

3. Run application

```bash
npm run start
# OR
yarn start
```
