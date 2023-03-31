import {useState} from 'react';
import MessagesList from './MessagesList';
import TextInput from './TextInput';
import './App.css';

function App() {

  const [ messages, setMessages ] = useState([{
    from: 'You',
    content: 'Hello World!'
  }]);

  const handleSubmit = (event) => {
    setMessages([ ...messages, {
      from: 'You',
      content: event.target.content.value
    }]);
  }

  return (
    <div className="App">
      <MessagesList messages={messages} />
      <TextInput onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
