import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./Main.css";

function Main() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorting Algorithms
          </Typography>
          <Button color="inherit" component={Link} to="/bubble-sort">
            Bubble Sort
          </Button>
          <Button color="inherit" component={Link} to="/merge-sort">
            Merge Sort
          </Button>
          <Button color="inherit" component={Link} to="/quick-sort">
            Quick Sort
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Main;
