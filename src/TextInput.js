import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const {Control, Group} = Form;
const {Feedback} = Control;

function TextInput({ onSubmit }) {
  
  const [ value, setValue ] = useState('');
  const [ validated, setValidated ] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      onSubmit(event);
    } else {
      event.stopPropagation();
      setValidated(true);
    }
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    setValidated(false);
  }

  return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Group>
          <Control
              name="content"
              type="text"
              value={value}
              placeholder="Message"
              onChange={handleChange}
              required
          />
          <Feedback type="invalid">Please write something.</Feedback>
        </Group>
        <Button type="submit">Enter</Button>
      </Form>
  );
}

export default TextInput;
