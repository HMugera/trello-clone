import React from "react";
import { Paper, Typography, CssBaseline, makeStyles } from "@material-ui/core";
import Title from "../title";
import Card from "../card/card";
import Inputcontainer from "../input/input-container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    margin: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

function List({ list }) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title listtitle={list.title} />
        {list.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <Inputcontainer listId={list.id} />
      </Paper>
    </div>
  );
}

export default List;
