import React from "react";
import { Paper, CssBaseline, makeStyles } from "@material-ui/core";
import Title from "../title/title";
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

function List({ list, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  );
}

export default List;
