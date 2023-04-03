import {XCircleFill} from 'react-bootstrap-icons';
import {Button} from "react-bootstrap";
import './Message.css';

function Message({ from, datetime, content, onDelete }) {

  const className = 'message message-' + (from === 'You' ? 'right' : 'left');

  return (
      <div className={className}>
        <p><strong>{from} on {datetime}</strong></p>
        <p>{content}</p>
        <Button className="message-delete" variant="danger" onClick={onDelete}>
          <XCircleFill /> Delete this message
        </Button>
      </div>
  );
}

export default Message;
