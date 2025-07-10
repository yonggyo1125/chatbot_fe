import React from 'react';
import styled from 'styled-components';
import ChatLog from '../components/ChatLog';
import ChatInput from '../components/ChatInput';

const Wrapper = styled.div``;

const ChatContainer = () => {
  return (
    <Wrapper>
      <ChatLog />
      <ChatInput />
    </Wrapper>
  );
};

export default React.memo(ChatContainer);
