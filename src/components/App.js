import video from "../data/video.js";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  
  const [videoObject, setVideoObject] = useState(video);

  function handleUpVote() {
    setVideoObject({
      ...videoObject,
      upvotes: videoObject.upvotes + 1
    });
  }

  function handleDownVote() {
    setVideoObject({
      ...videoObject,
      downvotes: videoObject.downvotes + 1
    });
  }

  console.log("Here's your data:", videoObject);

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl}/>
      <VideoDetails handleUpVote={handleUpVote} handleDownVote={handleDownVote} video={videoObject} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;