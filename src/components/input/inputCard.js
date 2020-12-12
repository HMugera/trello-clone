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
  btn: { diplay: "flex", justifyContent: "space-between" },
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

function InputCard({ setOpen, listId }) {
  const classes = useStyles();
  const { addMoreCard } = useContext(storeApi);
  const [cardTitle, setCardTitle] = useState("");

  const handleChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleChange}
            placeholder='Add activity'
            multiline
            required
            fullWidth
            value={cardTitle}
            inputProps={{
              className: classes.input,
            }}
          />
        </Paper>
      </div>
      <div className={classes.btn}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          Add Card
        </Button>
        <IconButton>
          <ClearIcon onClick={() => setOpen(false)} />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
