function Message({ from, datetime, content }) {
  return (
      <div className="message">
        <p>{from}</p>
        <p>{datetime}</p>
        <p>{content}</p>
      </div>
  );
}

export default Message;
