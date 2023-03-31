function Message({ from, content }) {
  return (
      <div className="message">
        <p>{from}</p>
        <p>{content}</p>
      </div>
  );
}

export default Message;
