export default function Video(props) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={props.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

    </div>
  );
}