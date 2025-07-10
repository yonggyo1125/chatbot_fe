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
    setItems((items) => {
      const _items = items.concat({ type: 'user', message });

      // 챗봇으로 메세지 전송
      const requestUrl = `${process.env.REACT_APP_API_URL}/chat?message=${message}`;

      fetch(requestUrl)
        .then((res) => res.json())
        .then((item) => console.log('item', item));

      return _items;
    });

    e.target.message.value = '';
  }, []);

  return (
    <Wrapper>
      <ChatLog items={items} />
      <ChatInput onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default React.memo(ChatContainer);
