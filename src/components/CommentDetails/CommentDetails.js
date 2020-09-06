import React from 'react';
import Typography from '@material-ui/core/Typography';
const CommentDetails = (props) => {
    const {name,email,body} = props.comment
    return (
       
      <div style={{ marginTop: "30px",backgroundColor:"lightgray",borderRadius:"60px",padding:"30px",marginBottom: "30px"}}>

       <div style={{display: "flex"}}>
        <div>
          <img src={`https://loremflickr.com/600/400?random=${Math.random()*10}`} alt="image" style={{width:"80px",height:"80px",borderRadius:"50%",marginRight:"20px"}}></img>
        </div>
        <div>

        <Typography gutterBottom variant="h5" component="h2" style={{height:"40px"}}>
              <b>{name}</b> 
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"40px"}}>
              <small> <i>{email}</i></small>
              </Typography>
        </div>
        </div> 
        <Typography gutterBottom variant="h5" component="h2">
              <small><b>{body}</b> </small>
              </Typography>
      </div>
    );
};

export default CommentDetails;