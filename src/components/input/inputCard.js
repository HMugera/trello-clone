import {
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

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
    "&:hover": {
      background: "#5AAC44",
    },
  },
}));
function InputCard({ setOpen }) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            placeholder='Add activity'
            onBlur={() => setOpen(false)}
            multiline
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            // onBlur={() => setOpen(!open)}
            // onChange={handleChange}
          />
        </Paper>
      </div>
      <div onClick={() => setOpen(false)}>
        <Button className={classes.btnConfirm}>Add Card</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
