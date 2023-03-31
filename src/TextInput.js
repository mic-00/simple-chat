import {useState} from 'react';

function TextInput({ onSubmit }) {
  
  const [ value, setValue ] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
    setValue('');
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <input
            name="content"
            type="text"
            value={value}
            placeholder="Message"
            onChange={(event) => setValue(event.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
  );
}

export default TextInput;
