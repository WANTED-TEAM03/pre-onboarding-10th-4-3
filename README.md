# 📚 사전 과제: "Toodos"

프론트엔드 신입 채용 면접에 앞서 `사전 코드리딩 과제`가 있습니다. 본 과제는 로직이나 기능을 개발하는 과제는 아니니 너무 걱정하시지 마세요 😎

앱의 동작에 대해 질문을 드릴 예정입니다. 면접 전에 코드리딩을 통해 기본적인 작동 방법을 익히신 후 면접에서 편하게 답변을 해주시면 됩니다.

> **중요**: _설명하시는 코드를 함께 볼 수 있도록 google meet에서 **화면 공유 준비**를 부탁드립니다._

# 🎯 목표

본 과제는 개발자의 하루 일과 중 가장 기본적인 업무인 **코드 리딩** 관련 과제입니다. 해당 리포지토리는 *Toodos*라는 이름을 가진 `React.js`로 제작된 `To-do 리스트` 앱입니다. 이번 코드 리딩을 통해 클라이언트 앱에 사용되는 리액트 라이브러리의 기본적인 이해도와 작동 방법을 다시 한 번 리마인드하여 추후 팀에 합류시 기존 코드를 무리 없이 파악하기 위해 준비하였습니다.

## 👀 Toodos 앱을 통해 확인하고 싶은 부분은 다음과 같습니다:

- [x] 함수형 컴포넌트([Functional component](https://reactjs.org/docs/components-and-props.html))와 [hooks](https://reactjs.org/docs/hooks-intro.html)에 대한 이해
- [x] Javascript([ES6](https://www.w3schools.com/js/js_es6.asp)<)의 비동기 연산에 대한 이해 ([Promise, async / await](https://javascript.info/async-await))
- [x] 클라이언트에서 보는 [REST API](https://restfulapi.net/http-methods/)에 대한 기본적인 이해

> 위 주제들의 대한 이론적인 지식보다는 본 리포지토리에서 활용되는 기술에 대한 이해를 중점으로, 인터뷰에서는 앱의 흐름과 작동 방법에 관련된 질문을 드릴 예정입니다.

# 🏠 Toodos 구조

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

# 🧐 질문 및 예상 답변 예시

- *TodoItem.js*에서 `filter`가 어떻게 작동하는지 설명해주세요.
  - `prev` 배열에 대해서 아이템 하나를 `item`으로 받아서 안에 있는 `id`와 함수가 넘겨받은 `id`를 비교해서, 다르면 유지하고 같으면 제거를 해서 새로운 배열을 반환합니다.
- *InputTodo.js*에서 `handleSubmit`이 실행되는 조건을 설명해주세요.
  - `form`에 `onSubmit` 속성으로 들어가있기 때문에, 키보드 enter나 `button`을 누르면 실행이 됩니다.
- *Main.js*에서 14번 라인의 `setTodoListData`가 어떤 조건에서 실행되는지 설명해주세요.
  - `setTodoListData`가 속해있는 `useEffect`의 dependency array가 비어있기 때문에 `Main` 컴포넌트가 처음 렌더링되는 시점 한 번만 실행됩니다.

<br/>

---

<br/>

# 💻 로컬 설치 및 실행방법

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
