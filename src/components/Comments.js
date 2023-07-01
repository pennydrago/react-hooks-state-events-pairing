import { useState } from "react";

export default function Comments(props) {
  
  const [showComments, setShowComments] = useState(true);

  function handleShowComments() {
    setShowComments(!showComments);
  }

  console.log(showComments)

  const commentsList = props.comments.map((comment) =>
    <div key={comment.id}>
    <h3>{comment.user}</h3>
    <p>{comment.comment}</p>
    </div>
  );
  
  return (
    <div>
      <button onClick={handleShowComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <hr/>
      {showComments ? 
        <div>
          <h2>{props.comments.length} Comments</h2>
          {commentsList}
        </div>
       : null}
    </div>
  );
}