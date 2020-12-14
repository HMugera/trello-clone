import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    background: "None",
    paddingLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    color: "#fff",
    backgroundColor: "#000",
    border: "1px solid black",
  },
}));
function Navbar({ openSidemenu, setopenSidemenu }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static' className={classes.AppBar} elevation={0}>
        <Toolbar>
          <h1 className={classes.title}>Activities</h1>
          <Button className={classes.btn} onClick={() => setopenSidemenu(true)}>
            Change Background
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
