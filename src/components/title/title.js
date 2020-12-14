import { InputBase, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import storeApi from "../../utils/storeApi";
const useStyles = makeStyles((theme) => ({
  editableTitle: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  editableTitleContainer: {
    display: "flex",
  },
  input: {
    margin: theme.spacing(1),
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:focus": {
      background: "#ddd",
    },
  },
}));

function Title({ listtitle, listId }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(listtitle);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyles();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelOnBlur = () => {
    setOpen(false);
    updateListTitle(title, listId);
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value={title}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handelOnBlur}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            className={classes.editableTitle}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}

export default Title;
