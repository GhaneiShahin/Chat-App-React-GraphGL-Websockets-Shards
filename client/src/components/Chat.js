import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Messages from './Messages';
import { Container, Row, Col, FormInput, Button } from 'shards-react';
import { POST_MESSAGES } from '../graphql/graphql';

const Chat = () => {
  const [state, setState] = useState({
    user: 'shahin',
    content: '',
  });

  const [postMessage] = useMutation(POST_MESSAGES);

  const onSend = () => {
    if (state.content.length > 0) {
      postMessage({
        variables: state,
      });
    }
    setState({ ...state, content: '' });
  };

  return (
    <Container>
      <Messages user={state.user} />
      <Row>
        <Col xs={2} style={{ padding: 0 }}>
          <FormInput
            lable="User"
            value={state.user}
            onChange={(e) => setState({ ...state, user: e.target.value })}
          />
        </Col>
        <Col xs={8}>
          <FormInput
            lable="Content"
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                onSend();
              }
            }}
          />
        </Col>
        <Col xs={2} style={{ padding: 0 }}>
          <Button style={{width:"100%"}} onClick={() => onSend()}>Send</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
