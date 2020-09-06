import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
const FriendDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <Container style={{ marginTop: "30px" }} maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Card>
              <CardMedia
                component="img"
                alt="image"
                height="240"
                image={`https://loremflickr.com/600/400?random=${id}`}
                
              />
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ height: "60px" }}
                  >
                    <b>{user.title}</b>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {user.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Card>
        </Grid>
      </Grid>
      <Comments></Comments>
    </Container>
  );
};

export default FriendDetail;
