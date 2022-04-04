import App from "./App";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { initFakeDB } from "./utils/index";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);

/*
 * 클라이언트 브라우저의 sessionStorage를 이용한 fake-DB 실행 포인트입니다.
 * 이부분은 신경쓰시지 않으셔도 됩니다 :)
 */
initFakeDB();
