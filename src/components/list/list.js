import React from "react";
import { Paper, Typography, CssBaseline, makeStyles } from "@material-ui/core";
import Title from "../title";
import Card from "../card/card";
import Inputcontainer from "../input/inputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    margin: theme.spacing(2),
    padding: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(3),
  },
}));

function List({ list, type }) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title listtitle={list.title} listId={list.id} />
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classes.cardContainer}
            >
              {list.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Inputcontainer listId={list.id} type='card' />
      </Paper>
    </div>
  );
}

export default List;
