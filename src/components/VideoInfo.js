import React, { useState } from "react";

import CommentsSection from "./CommentsSection";

function VideoInfo({ videoData }) {
  const [videoInfo, setVideoInfo] = useState(videoData);
  const [isVisible, setVisibility] = useState(true);

  function handleLikes() {
    let video = { ...videoInfo };
    video.upvotes = video.upvotes + 1;
    setVideoInfo(video);
  }

  function handleDislikes() {
    let video = { ...videoInfo };
    video.downvotes = video.downvotes + 1;
    setVideoInfo(video);
  }

  function handleVisibility() {
    setVisibility(!isVisible);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoInfo.embedUrl}
        allowFullScreen
        title={videoInfo.title}
      />
      <h1>{videoInfo.title}</h1>
      <p>
        {videoInfo.views} Views | Uploaded {videoInfo.createdAt}
      </p>
      <button onClick={handleLikes}>{videoInfo.upvotes} 👍</button>
      <button onClick={handleDislikes}>{videoInfo.downvotes} 👎</button>
      <br></br>
      <button onClick={handleVisibility}>
        {isVisible ? "Hide Comments" : "Show Comments"}
      </button>
      {isVisible ? <CommentsSection comments={videoInfo.comments} /> : ""}
    </div>
  );
}

export default VideoInfo;
