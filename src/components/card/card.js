import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

function Card({ card }) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.card}>{card.title}</Paper>
    </div>
  );
}

export default Card;
