export default function VideoDetails(props) {
    
  console.log("Here's your data:", props.video);
  
  return (
    <div>
      <h1>{props.video.title}</h1>
      <p>{props.video.views} Views | Uploaded {props.video.createdAt}</p>
      <button onClick={props.handleUpVote}>{props.video.upvotes}👍</button>
      <button onClick={props.handleDownVote}>{props.video.downvotes}👎</button> <br/>
      
    </div>
  );
}