import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentDetails from "../CommentDetails/CommentDetails";

const Comments = () => {
  const [comment, setComment] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {comment.map((comment) => (
        <CommentDetails comment={comment}></CommentDetails>
      ))}
    </div>
  );
};

export default Comments;
