import {useState} from 'react';
import MessagesList from './MessagesList';
import './App.css';

function App() {

  const [ messages, setMessages ] = useState([{
    from: 'You',
    content: 'Hello World!'
  }]);

  return (
    <div className="App">
      <MessagesList messages={messages} />
    </div>
  );
}

export default App;
