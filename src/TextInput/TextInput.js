import {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import './TextInput.css';

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
      <Form className="textinput" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={9}>
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
          </Col>
          <Col xs={3}>
            <Button type="submit">Enter</Button>
          </Col>
        </Row>
      </Form>
  );
}

export default TextInput;
