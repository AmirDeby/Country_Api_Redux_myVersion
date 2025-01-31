import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
// BrowserRouter as Router, Route,
// V
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Market Place
          </Typography>
          <Button color="inherit">
            <Link to="/settings">Settings</Link>
          </Button>
          <Button color="inherit">
            <Link to="/countries">Countries</Link>
          </Button>
          <Button color="inherit">
            <Link to="/add-image">Add Image</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
