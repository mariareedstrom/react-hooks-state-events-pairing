import React from "react";

function CommentCard({ comment }) {
  //   console.log(comment);

  function handleLike() {
    alert("clicked like!");
  }

  function handleDislike() {
    alert("clicked dislike!");
  }

  return (
    <div>
      <h3>{comment.user}</h3>
      <h5>{comment.comment}</h5>
      <button onClick={handleLike}> 👍 </button>
      <button onClick={handleDislike}> 👎 </button>
    </div>
  );
}

export default CommentCard;
