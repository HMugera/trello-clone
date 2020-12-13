import "./App.css";
import List from "./components/list/list";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import Inputcontainer from "./components/input/inputContainer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "orange",
  },
}));

function App() {
  const classes = useStyles();
  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();

    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
        <Inputcontainer type='list' />
      </div>
    </StoreApi.Provider>
  );
}

export default App;
