import Message from "./Message";

function MessagesList({ messages }) {
  return (
      <div id="messages">
        {messages?.map((message, index) => <Message { ...message } key={index} />)}
      </div>
  );
}

export default MessagesList;
