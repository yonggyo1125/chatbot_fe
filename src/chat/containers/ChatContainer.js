import React from 'react';
import styled from 'styled-components';
import ChatLog from '../components/ChatLog';
import ChatInput from '../components/ChatInput';
const Wrapper = styled.div`
  min-width: 320px;
  max-width: 450px;
  width: 100%;
  margin: 20px auto;
`;

const ChatContainer = () => {
  return (
    <Wrapper>
      <ChatLog />
      <ChatInput />
    </Wrapper>
  );
};

export default React.memo(ChatContainer);
