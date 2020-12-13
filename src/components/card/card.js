import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { PersonalVideoRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

function Card({ card, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
