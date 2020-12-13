import {
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import storeApi from "../../utils/storeApi";
const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
  },
  input: {
    padding: theme.spacing(0.1),
  },
  btnConfirm: {
    background: "green",
    color: "#fff",
    marginRight: "140px",
    "&:hover": {
      background: "#5AAC44",
    },
  },
}));

function InputCard({ setOpen, listId, type }) {
  const classes = useStyles();
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleChange}
            placeholder={type === "card" ? "Add activity" : "Add new list"}
            multiline
            required
            fullWidth
            value={title}
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton>
          <ClearIcon onClick={() => setOpen(false)} />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
