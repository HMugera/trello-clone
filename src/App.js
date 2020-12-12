import "./App.css";
import List from "./components/list/list";
import { useState } from "react";
import store from "./utils/store";

function App() {
  const [data, setdata] = useState(store);
  return (
    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />;
      })}
    </div>
  );
}

export default App;
