import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";


const Friend = (props) => {
  const { title, id } = props.friend;
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
                    style={{ height: "40px" }}
                  >
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/about/${id}`} style={{textDecoration:"none"}}>
                  <Button variant="contained" color="primary">
                    See More 
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Friend;
