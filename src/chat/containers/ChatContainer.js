import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ChatLog from '../components/ChatLog';
import ChatInput from '../components/ChatInput';
const Wrapper = styled.div`
  min-width: 320px;
  max-width: 450px;
  width: 100%;
  min-height: 600px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const ChatContainer = () => {
  const [items, setItems] = useState([]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const message = e.target.message.value.trim();
    setItems((items) => items.concat({ type: 'user', message }));

    e.target.message.value = '';
  }, []);

  return (
    <Wrapper>
      <ChatLog />
      <ChatInput onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default React.memo(ChatContainer);
