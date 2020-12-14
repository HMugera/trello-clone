import {
  makeStyles,
  Paper,
  Typography,
  fade,
  Collapse,
} from "@material-ui/core";

import React, { useState } from "react";
import InputCard from "./inputCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  addCard: {
    margin: theme.spacing(1, 1, 1, 2),
    padding: theme.spacing(1),
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontWeight: "20px",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));
function Inputcontainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          onClick={() => setOpen(!open)}
          elevation={0}
        >
          <Typography>
            {" "}
            {type === "card" ? " Add Activity" : " Add New list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

export default Inputcontainer;
