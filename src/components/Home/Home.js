import React, { useState } from "react";
import { useEffect } from "react";
import Friend from "../Friend/Friend";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Header from "../Header/Header";

function Home() {
  const [friends, setFriends] = useState([]);
  const useStyles = makeStyles({
    root: {
      margin: "30px",
      Width: "400px",
      height: "400px",
    },
  });
  const classes = useStyles();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <Container className={classes.root}>
      <Header></Header>
      <Grid container spacing={3}>
        {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
