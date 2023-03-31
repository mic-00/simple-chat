import {useEffect, useState} from 'react';
import axios from 'axios';
import MessagesList from './MessagesList';
import TextInput from './TextInput';
import './App.css';

function App() {

  const [ messages, setMessages ] = useState([{
    from: 'You',
    content: 'Hello World!'
  }]);

  useEffect(() => {
    const id = setInterval(() => {
      const name = 'Mario';
      const reason = 'I like to insult you';
      axios
          .get(`https://api.humorapi.com/insult?api-key=${process.env.REACT_APP_API_KEY}&name=${name}&reason=${reason}`)
          .then(res => {
            setMessages(messages => [ ...messages, {
              from: 'Luigi',
              content: res.data.text
            } ]);
          });
    }, 5000);
    return () => clearInterval(id);
  }, []);

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
