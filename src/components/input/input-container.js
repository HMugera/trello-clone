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
    padding: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));
function Inputcontainer({ listId }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          onClick={() => setOpen(!open)}
          elevation={0}
        >
          <Typography> + Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

export default Inputcontainer;
