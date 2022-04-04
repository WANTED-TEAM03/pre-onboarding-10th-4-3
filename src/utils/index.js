/*
 * 클라이언트 브라우저의 sessionStorage를 이용한 fake-DB 입니다.
 * 이부분은 신경쓰시지 않으셔도 됩니다 :)
 */

export const uuid = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const randomString = "xxxxxxxxxxxxxxxx"
    .replace(/[x]/g, function () {
      return ((Math.random() * 16) | 0).toString(16);
    })
    .toLowerCase();
  const newObjectId = `${timestamp}${randomString}`;

  return newObjectId;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const dummyData = [
  {
    id: uuid(),
    title: "PR review",
  },
  {
    id: uuid(),
    title: "Fix update issue",
  },
  {
    id: uuid(),
    title: "Call mom at lunch",
  },
];

export const initFakeDB = () => {
  // get Dummy data
  const db = { todos: dummyData };
  // Save on sessionStorage
  sessionStorage.setItem("db", JSON.stringify(db));
  console.log("LOCAL-DB Initialized");
};

const saveToFakeDB = (newDB) => {
  sessionStorage.setItem("db", JSON.stringify(newDB));
  console.log("LOCAL-DB Updated");
};

export const Fetch = async (url = "", options = { method: "GET" }) => {
  const BASE_URL = "https://api.at-ant.co";
  const ENDPOINT = url?.split(BASE_URL)[1];
  const METHOD = options?.method?.toLowerCase();
  const BODY = options?.body;
  const db = JSON.parse(sessionStorage.getItem("db"));

  if (ENDPOINT === "/todos") {
    switch (METHOD) {
      case "get":
        return FetchResponse(db?.todos);
      case "post":
        await sleep(1000);
        db.todos = [...db?.todos, BODY];
        saveToFakeDB(db);
        break;

      default:
        break;
    }
  } else if (ENDPOINT.includes("/todos/")) {
    switch (METHOD) {
      case "delete":
        await sleep(1000);
        const reqIdx = ENDPOINT.split("/").pop();
        const filtered = db?.todos?.filter((t) => t.id !== reqIdx);
        saveToFakeDB({ todos: filtered });
        break;

      default:
        break;
    }
  }
};

const FetchResponse = (data) => {
  return new Promise(
    (resolve) => {
      return resolve(data);
    },
    (reject) => {
      return reject("Something went wrong...");
    },
  );
};
