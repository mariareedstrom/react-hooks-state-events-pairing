import React from "react";
import CommentCard from "./CommentCard";

function CommentsSection({ comments }) {
  return (
    <div>
      <h3>{comments.length} Comments</h3>
      <div>
        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
