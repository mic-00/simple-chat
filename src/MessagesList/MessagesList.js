import Message from '../Message/Message';
import './MessagesList.css';

function MessagesList({ messages, onDelete }) {
  return (
      <div id="messages">
        {messages?.map((message, index) => <Message { ...message } key={index} onDelete={() => onDelete(index)} />)}
      </div>
  );
}

export default MessagesList;
